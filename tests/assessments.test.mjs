import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {grade,eligibility} from '../server/domain.mjs';
const courses=JSON.parse(fs.readFileSync(new URL('../server/course-index.json',import.meta.url)));
const definitions=JSON.parse(fs.readFileSync(new URL('../server/assessments.json',import.meta.url)));
for(const [id,c]of Object.entries(courses))test(id+': quatro integrações e projeto final têm critérios, correção e revisão coerentes',()=>{
 const d=definitions[id];assert.ok(d);assert.equal(d.combos.length,4);assert.equal(d.finalProject.requirements.length,6);assert.equal(d.finalProject.deliverables.length,4);assert.equal(d.finalProject.rubric.length,6);assert.equal(d.finalProject.acceptance.length,3);
 const texts=new Set();
 for(const [i,combo]of d.combos.entries()){
  assert.equal(combo.id,'combo-'+(i+1));assert.ok(combo.requiredLessons.length>=3&&combo.requiredLessons.length<=6);assert.equal(new Set(combo.requiredLessons).size,combo.requiredLessons.length);
  assert.ok(combo.requiredLessons.every(n=>Number.isInteger(n)&&n>=1&&n<=(i+1)*9));
  assert.equal(eligibility(c,{},combo,{}).ok,false);
  for(const q of combo.questions)assert.ok(q.reviewLessons.every(n=>combo.requiredLessons.includes(n)));
 }
 for(const activity of [...d.combos,d.finalProject]){
  assert.equal(activity.questions.length,3);
  for(const q of activity.questions){assert.ok(!texts.has(q.prompt));texts.add(q.prompt);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.reviewLessons.length);assert.ok(q.reviewLessons.every(n=>Number.isInteger(n)&&n>=1&&n<=36));assert.ok(q.explanation.length>30);}
  const correct=Object.fromEntries(activity.questions.map(q=>[q.id,q.answer]));assert.equal(grade(activity.questions,correct).score,100);assert.equal(grade(activity.questions,correct).passed,true);
 }
 assert.equal(texts.size,15);
 for(const r of [...d.finalProject.rubric,...d.finalProject.acceptance])assert.ok(r.reviewLessons.every(n=>n>=1&&n<=36));
});
