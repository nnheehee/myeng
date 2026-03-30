const GRAMMAR = [
  // ===== 품사 선택 (Part 5 핵심) =====
  { sentence: "The company made a ______ decision to expand overseas.", options: ["strategy", "strategic", "strategically", "strategize"], answer: 1, explanation: "명사(decision) 앞에는 형용사가 옵니다. strategic(전략적인)이 정답입니다.", category: "품사" },
  { sentence: "Our team worked ______ to meet the deadline.", options: ["efficient", "efficiency", "efficiently", "more efficient"], answer: 2, explanation: "동사(worked)를 수식하려면 부사가 필요합니다. efficiently(효율적으로)가 정답입니다.", category: "품사" },
  { sentence: "The ______ of the new policy will begin next month.", options: ["implement", "implementation", "implemented", "implementing"], answer: 1, explanation: "관사(The) 뒤에는 명사가 옵니다. implementation(시행)이 정답입니다.", category: "품사" },
  { sentence: "Customer ______ has improved significantly this quarter.", options: ["satisfy", "satisfying", "satisfaction", "satisfactory"], answer: 2, explanation: "주어 자리에는 명사가 옵니다. satisfaction(만족도)이 정답입니다.", category: "품사" },
  { sentence: "The manager spoke ______ about the company's future plans.", options: ["enthusiasm", "enthusiastic", "enthusiastically", "enthusiast"], answer: 2, explanation: "동사(spoke)를 수식하려면 부사가 필요합니다. enthusiastically(열정적으로)가 정답입니다.", category: "품사" },
  { sentence: "We need to find a more ______ solution to this problem.", options: ["practice", "practical", "practically", "practiced"], answer: 1, explanation: "명사(solution) 앞에는 형용사가 옵니다. practical(실용적인)이 정답입니다.", category: "품사" },
  { sentence: "The ______ growth of the company exceeded expectations.", options: ["rapidly", "rapid", "rapidity", "rapids"], answer: 1, explanation: "명사(growth) 앞에는 형용사가 옵니다. rapid(빠른)가 정답입니다.", category: "품사" },
  { sentence: "All employees must submit their reports ______.", options: ["prompt", "promptly", "promptness", "prompting"], answer: 1, explanation: "동사(submit)를 수식하려면 부사가 필요합니다. promptly(즉시)가 정답입니다.", category: "품사" },
  { sentence: "Her ______ to the project was recognized by the board.", options: ["contribute", "contribution", "contributing", "contributor"], answer: 1, explanation: "소유격(Her) 뒤에는 명사가 옵니다. contribution(기여)이 정답입니다.", category: "품사" },
  { sentence: "The results were ______ positive across all departments.", options: ["overwhelm", "overwhelming", "overwhelmingly", "overwhelmed"], answer: 2, explanation: "형용사(positive)를 수식하려면 부사가 필요합니다. overwhelmingly(압도적으로)가 정답입니다.", category: "품사" },
  { sentence: "The CEO announced a ______ restructuring of the company.", options: ["comprehend", "comprehensive", "comprehensively", "comprehension"], answer: 1, explanation: "명사(restructuring) 앞에는 형용사가 옵니다. comprehensive(포괄적인)가 정답입니다.", category: "품사" },
  { sentence: "The new regulation requires ______ from all businesses.", options: ["comply", "compliant", "compliance", "complying"], answer: 2, explanation: "동사(requires)의 목적어 자리에는 명사가 옵니다. compliance(준수)가 정답입니다.", category: "품사" },

  // ===== 동사 시제 =====
  { sentence: "The construction project ______ by the end of next year.", options: ["completes", "completed", "will be completed", "has completed"], answer: 2, explanation: "\"by the end of next year\"는 미래 시점이므로 미래 수동태 will be completed가 정답입니다.", category: "시제" },
  { sentence: "Sales ______ steadily since the new campaign launched.", options: ["increase", "increased", "have increased", "will increase"], answer: 2, explanation: "\"since\"는 현재완료와 함께 씁니다. have increased가 정답입니다.", category: "시제" },
  { sentence: "The report ______ to all department heads yesterday.", options: ["distributes", "distributed", "was distributed", "has distributed"], answer: 2, explanation: "\"yesterday\"는 과거 시점이고, 보고서는 배포'되는' 것이므로 과거 수동태 was distributed가 정답입니다.", category: "시제" },
  { sentence: "By the time the manager arrived, the meeting ______ already.", options: ["starts", "started", "had started", "will start"], answer: 2, explanation: "과거(arrived)보다 더 이전에 일어난 일이므로 과거완료 had started가 정답입니다.", category: "시제" },
  { sentence: "The factory ______ over 10,000 units every month.", options: ["produce", "produces", "produced", "producing"], answer: 1, explanation: "\"every month\"는 현재 반복되는 습관이므로 현재시제 produces가 정답입니다.", category: "시제" },
  { sentence: "Ms. Kim ______ at the company for over fifteen years.", options: ["works", "worked", "has worked", "is working"], answer: 2, explanation: "\"for over fifteen years\"와 함께 현재까지 계속된 상태를 나타내므로 현재완료 has worked가 정답입니다.", category: "시제" },

  // ===== 전치사 =====
  { sentence: "The conference will be held ______ September 15th.", options: ["in", "on", "at", "by"], answer: 1, explanation: "특정 날짜 앞에는 on을 씁니다.", category: "전치사" },
  { sentence: "Please respond ______ this email by Friday.", options: ["at", "for", "to", "with"], answer: 2, explanation: "respond to ~: ~에 응답하다. 전치사 to가 정답입니다.", category: "전치사" },
  { sentence: "The office is located ______ the corner of Main Street.", options: ["in", "on", "at", "by"], answer: 2, explanation: "\"at the corner of\"는 특정 모퉁이 지점을 나타냅니다.", category: "전치사" },
  { sentence: "We are responsible ______ maintaining quality standards.", options: ["to", "for", "with", "about"], answer: 1, explanation: "responsible for ~: ~에 대해 책임이 있는. 전치사 for가 정답입니다.", category: "전치사" },
  { sentence: "The project was completed ahead ______ schedule.", options: ["from", "to", "of", "with"], answer: 2, explanation: "ahead of schedule: 예정보다 앞서. 전치사 of가 정답입니다.", category: "전치사" },
  { sentence: "The new policy goes ______ effect on January 1st.", options: ["in", "into", "to", "on"], answer: 1, explanation: "go into effect: 시행되다, 효력이 발생하다. 전치사 into가 정답입니다.", category: "전치사" },
  { sentence: "Applications must be submitted ______ 5:00 PM.", options: ["until", "by", "within", "during"], answer: 1, explanation: "\"by + 시간\"은 마감 시한을 나타냅니다. '~까지'라는 뜻입니다.", category: "전치사" },
  { sentence: "The merger resulted ______ significant cost savings.", options: ["to", "for", "in", "with"], answer: 2, explanation: "result in ~: ~을 초래하다. 전치사 in이 정답입니다.", category: "전치사" },
  { sentence: "In accordance ______ company policy, all visitors must sign in.", options: ["to", "for", "by", "with"], answer: 3, explanation: "in accordance with ~: ~에 따라. 전치사 with가 정답입니다.", category: "전치사" },
  { sentence: "She was promoted ______ senior manager last month.", options: ["as", "to", "for", "into"], answer: 1, explanation: "be promoted to ~: ~으로 승진하다. 전치사 to가 정답입니다.", category: "전치사" },

  // ===== 접속사 / 연결어 =====
  { sentence: "______ the heavy rain, the outdoor event was canceled.", options: ["Despite", "Due to", "Although", "However"], answer: 1, explanation: "뒤에 명사구(the heavy rain)가 오므로 전치사 Due to(~ 때문에)가 정답입니다. Although는 절이 와야 합니다.", category: "접속사" },
  { sentence: "The product is popular ______ it is reasonably priced.", options: ["because", "despite", "although", "therefore"], answer: 0, explanation: "이유를 나타내는 절이 이어지므로 접속사 because(~이기 때문에)가 정답입니다.", category: "접속사" },
  { sentence: "______ the economy slows down, our company continues to grow.", options: ["Even though", "Because", "Due to", "Therefore"], answer: 0, explanation: "양보(~에도 불구하고)를 나타내는 접속사 Even though가 정답입니다.", category: "접속사" },
  { sentence: "Please review the contract ______ signing it.", options: ["after", "before", "during", "while"], answer: 1, explanation: "서명하기 '전에' 계약서를 검토하라는 의미이므로 before가 정답입니다.", category: "접속사" },
  { sentence: "The project was delayed; ______, additional funding was approved.", options: ["however", "moreover", "therefore", "otherwise"], answer: 0, explanation: "앞뒤 문장이 대조되므로 however(그러나)가 정답입니다.", category: "접속사" },
  { sentence: "______ you have any questions, please contact the HR department.", options: ["Although", "If", "Unless", "Despite"], answer: 1, explanation: "조건을 나타내는 접속사 If(만약 ~하면)가 정답입니다.", category: "접속사" },
  { sentence: "The seminar was informative; ______, it was very well attended.", options: ["however", "furthermore", "otherwise", "instead"], answer: 1, explanation: "앞 내용에 추가 정보를 더하므로 furthermore(게다가)가 정답입니다.", category: "접속사" },
  { sentence: "We will proceed with the plan ______ we receive approval.", options: ["once", "despite", "during", "due to"], answer: 0, explanation: "\"~하면 바로\"를 나타내는 접속사 once가 정답입니다.", category: "접속사" },

  // ===== 대명사 / 관계사 =====
  { sentence: "Each employee must submit ______ timesheet by Friday.", options: ["his or her", "their", "its", "one's"], answer: 0, explanation: "Each는 단수이므로 his or her가 문법적으로 정확합니다. 토익에서는 his or her를 선호합니다.", category: "대명사" },
  { sentence: "The candidates ______ applications were received late will not be considered.", options: ["who", "whose", "which", "whom"], answer: 1, explanation: "뒤에 명사(applications)가 오고 소유 관계이므로 whose(~의)가 정답입니다.", category: "관계사" },
  { sentence: "Ms. Park is the person ______ you should contact regarding this matter.", options: ["who", "whose", "whom", "which"], answer: 2, explanation: "contact의 목적어이므로 목적격 관계대명사 whom이 정답입니다.", category: "관계사" },
  { sentence: "The building ______ was constructed in 1990 needs renovation.", options: ["who", "whom", "which", "whose"], answer: 2, explanation: "사물(The building)을 선행사로 하므로 which가 정답입니다.", category: "관계사" },
  { sentence: "All employees should familiarize ______ with the new safety procedures.", options: ["they", "them", "their", "themselves"], answer: 3, explanation: "familiarize oneself with ~: ~에 익숙해지다. 재귀대명사 themselves가 정답입니다.", category: "대명사" },

  // ===== 어휘 (문맥에 맞는 단어 선택) =====
  { sentence: "The warranty will ______ if the product is misused.", options: ["expire", "void", "be voided", "expiring"], answer: 2, explanation: "보증이 '무효화되다'라는 수동의 의미이므로 be voided가 정답입니다.", category: "어휘" },
  { sentence: "Employees are ______ to attend the annual training session.", options: ["required", "requested", "reminded", "referred"], answer: 0, explanation: "의무적으로 참석해야 하므로 required(요구되는)가 가장 적합합니다.", category: "어휘" },
  { sentence: "The company will ______ a new branch in Tokyo next spring.", options: ["establish", "install", "settle", "construct"], answer: 0, explanation: "지사를 '설립하다'는 establish가 적합합니다.", category: "어휘" },
  { sentence: "Please ______ the attached document for your reference.", options: ["look", "refer", "see", "review"], answer: 3, explanation: "문서를 '검토하다'는 review가 비즈니스에서 가장 적합합니다.", category: "어휘" },
  { sentence: "The proposal was ______ approved by the board of directors.", options: ["anonymously", "unanimously", "simultaneously", "continuously"], answer: 1, explanation: "이사회에서 '만장일치로' 승인했으므로 unanimously가 정답입니다.", category: "어휘" },
  { sentence: "Due to ______ demand, we have extended the sale period.", options: ["overwhelming", "underwhelming", "overlooking", "overcoming"], answer: 0, explanation: "수요가 '압도적인'이라는 의미이므로 overwhelming이 정답입니다.", category: "어휘" },
  { sentence: "The renovation is expected to ______ approximately three months.", options: ["spend", "take", "last", "use"], answer: 2, explanation: "기간이 '지속되다'는 last가 적합합니다. take도 가능하지만 주어가 사물일 때 last가 더 자연스럽습니다.", category: "어휘" },
  { sentence: "Mr. Lee has been ______ as the new regional director.", options: ["appointed", "applied", "appreciated", "approved"], answer: 0, explanation: "새 지역 이사로 '임명되었다'는 appointed가 정답입니다.", category: "어휘" },
  { sentence: "The company ______ a significant increase in revenue last quarter.", options: ["earned", "experienced", "gained", "won"], answer: 1, explanation: "수익 증가를 '경험했다'는 experienced가 비즈니스 맥락에서 가장 적합합니다.", category: "어휘" },
  { sentence: "All ______ must be submitted before the deadline.", options: ["applies", "applicants", "applications", "applicable"], answer: 2, explanation: "제출해야 하는 것은 '지원서(applications)'입니다. 명사가 필요합니다.", category: "어휘" },
  { sentence: "The manager ______ praised the team for their outstanding performance.", options: ["deeply", "highly", "largely", "widely"], answer: 1, explanation: "highly praised: 크게 칭찬하다. highly가 praised와 가장 자연스럽게 어울립니다.", category: "어휘" },
  { sentence: "Please make sure to ______ your reservation at least 24 hours in advance.", options: ["confirm", "conform", "confine", "confuse"], answer: 0, explanation: "예약을 '확인하다'는 confirm이 정답입니다.", category: "어휘" },
  { sentence: "The factory has ______ increased its production capacity.", options: ["significantly", "relatively", "approximately", "accordingly"], answer: 0, explanation: "생산 능력을 '상당히' 증가시켰다는 의미이므로 significantly가 정답입니다.", category: "어휘" },

  // ===== 추가 품사 문제 =====
  { sentence: "The ______ of the merger surprised many industry analysts.", options: ["announce", "announcement", "announcing", "announced"], answer: 1, explanation: "관사(The) 뒤에는 명사가 옵니다. announcement(발표)가 정답입니다.", category: "품사" },
  { sentence: "We offer ______ competitive salaries and benefits packages.", options: ["high", "height", "highly", "higher"], answer: 2, explanation: "형용사(competitive)를 수식하려면 부사가 필요합니다. highly(매우)가 정답입니다.", category: "품사" },
  { sentence: "The report provides a ______ analysis of market trends.", options: ["detail", "detailed", "detailing", "details"], answer: 1, explanation: "명사(analysis) 앞에는 형용사가 옵니다. detailed(상세한)가 정답입니다.", category: "품사" },
  { sentence: "Customer feedback is ______ important for improving our services.", options: ["extreme", "extremely", "extremity", "extremes"], answer: 1, explanation: "형용사(important)를 수식하려면 부사가 필요합니다. extremely(극히)가 정답입니다.", category: "품사" },
  { sentence: "The ______ approved budget allows for additional hiring.", options: ["recent", "recently", "recency", "recenter"], answer: 1, explanation: "과거분사(approved)를 수식하려면 부사가 필요합니다. recently(최근에)가 정답입니다.", category: "품사" },
  { sentence: "There has been a ______ improvement in customer service ratings.", options: ["notice", "noticeable", "noticeably", "noticed"], answer: 1, explanation: "명사(improvement) 앞에는 형용사가 옵니다. noticeable(눈에 띄는)이 정답입니다.", category: "품사" },

  // ===== 추가 시제/태 =====
  { sentence: "The new software ______ to all employees by next week.", options: ["will distribute", "will be distributed", "distributes", "distributed"], answer: 1, explanation: "소프트웨어는 배포'되는' 것이고, \"by next week\"은 미래이므로 will be distributed가 정답입니다.", category: "시제" },
  { sentence: "The budget for next year ______ not yet been finalized.", options: ["is", "was", "has", "had"], answer: 2, explanation: "\"not yet\"은 현재완료와 함께 씁니다. has not yet been finalized가 정답입니다.", category: "시제" },

  // ===== 추가 전치사 =====
  { sentence: "The training session is aimed ______ new employees.", options: ["for", "at", "to", "on"], answer: 1, explanation: "be aimed at ~: ~을 대상으로 하다. 전치사 at이 정답입니다.", category: "전치사" },
  { sentence: "We look forward ______ hearing from you soon.", options: ["at", "for", "to", "on"], answer: 2, explanation: "look forward to ~ing: ~을 기대하다. 전치사 to가 정답입니다.", category: "전치사" },
  { sentence: "The increase in sales was attributed ______ the new marketing strategy.", options: ["for", "by", "to", "with"], answer: 2, explanation: "be attributed to ~: ~에 기인하다. 전치사 to가 정답입니다.", category: "전치사" },
  { sentence: "Participants should refrain ______ using mobile phones during the seminar.", options: ["to", "for", "from", "of"], answer: 2, explanation: "refrain from ~ing: ~을 삼가다. 전치사 from이 정답입니다.", category: "전치사" },
];
