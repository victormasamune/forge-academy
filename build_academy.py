"""Publica os currículos autorais em dados estáticos e planos legíveis."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DEST = ROOT / 'public' / 'learn'

def validate(course):
    assert len(course['levels']) == 12
    assert len(course['lessons']) == 36
    assert sum(level['hours'] for level in course['levels']) == course['hours']
    assert sum(lesson['hours'] for lesson in course['lessons']) == course['hours']
    for index, level in enumerate(course['levels'], 1):
        assert level['id'] == index
        assert len(level['deliverables']) >= 3 and len(level['rubric']) >= 3
        assert len(level['challenge']) == 3
        assert len([lesson for lesson in course['lessons'] if lesson['level'] == index]) == 3
        for question in level['challenge']:
            validate_question(question)
    for index, lesson in enumerate(course['lessons'], 1):
        assert lesson['id'] == index
        assert lesson['level'] == (index - 1) // 3 + 1
        assert len(lesson['theory']) >= 3 and len(lesson['exercises']) == 3
        assert all(section['text'].strip() for section in lesson['theory'])
        assert lesson['code'].strip() and lesson['filename'] and lesson['run'] and lesson['expected']
        assert lesson['source'].startswith('https://')
        validate_question(lesson['quiz'])
        for ex_index, exercise in enumerate(lesson['exercises'], 1):
            assert exercise['id'] == ex_index
            assert all(exercise[key] for key in ['title', 'prompt', 'hint', 'solution'])
            assert len(exercise['criteria']) >= 2

def validate_question(question):
    assert len(question['options']) == 4
    assert len(set(question['options'])) == 4
    assert question['answer'] in range(4)
    assert question['question'] and question['explanation']

def plan(course):
    lines = [f"# Plano de ensino — {course['name']}", '', course['description'], '',
             f"**Carga estimada:** {course['hours']} horas. **Ritmo base:** 8 h/semana.",
             '**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.',
             '**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.', '',
             '## Antes de começar', '']
    lines.extend('- ' + item for item in course['prerequisites'])
    lines.extend(['', 'As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.',
                  'Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.', '',
                  '## Níveis e entregas', '', '| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |', '| --- | --- | ---: | --- | --- |'])
    done = 0
    for level in course['levels']:
        start = done // 8 + 1
        done += level['hours']
        end = (done + 7) // 8
        lines.append(f"| {level['id']:02} | {level['title']} | {level['hours']} | {start}–{end} | {level['project']} |")
    for level in course['levels']:
        lines.extend(['', f"## Nível {level['id']:02} — {level['title']}", '', level['summary'], '', '**Aulas e objetivos**', ''])
        for lesson in [l for l in course['lessons'] if l['level'] == level['id']]:
            lines.append(f"- Aula {lesson['id']:02}: **{lesson['title']}** — {lesson['goal']} ({lesson['hours']} h)")
            for exercise in lesson['exercises']:
                lines.append(f"  - Exercício {exercise['id']}: {exercise['prompt']}")
        lines.extend(['', '**Projeto:** ' + level['project'], ''])
        lines.extend('- ' + item for item in level['deliverables'])
        lines.extend(['', '**Critérios de conclusão**', ''])
        lines.extend('- ' + item for item in level['rubric'])
    lines.extend(['', '## Rotina sugerida', '',
                  '- 1 h: teoria, previsão do exemplo e anotações.',
                  '- 2 h: execução e variações do exemplo.',
                  '- 2 h: exercícios, checagem e revisão dos erros.',
                  '- 2 h: projeto do nível.',
                  '- 1 h: revisão sem consulta e dúvidas para o chat.', '',
                  '## Como avançar', '',
                  'Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.', '',
                  '## Fontes oficiais', ''])
    lines.extend(f"- [{ref['title']}]({ref['url']}) — {ref['description']}" for ref in course['references'])
    return '\n'.join(lines) + '\n'

if __name__ == '__main__':
    (DEST / 'courses').mkdir(exist_ok=True)
    for source in sorted((ROOT / 'curricula').glob('*.json')):
        course_id = source.stem
        course = json.loads(source.read_text())
        assert course['id'] == course_id
        validate(course)
        payload = json.dumps(course, ensure_ascii=False, separators=(',', ':'))
        (DEST / 'courses' / (course_id + '.js')).write_text(
            'window.COURSES=window.COURSES||{};window.COURSES.' + course_id + '=' + payload + ';\n')
        (DEST / ('cronograma-' + course_id + '.md')).write_text(plan(course))
        print(f"{course['name']}: 12 níveis, 36 aulas, 108 exercícios, {course['hours']}h")
