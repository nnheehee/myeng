const READINGS = [
  {
    title: "Company Merger Announcement",
    passage: "GreenTech Inc. is pleased to announce its merger with SolarWave Corp., effective January 1st. The combined entity will operate under the name GreenWave Technologies. All current employees of both companies will retain their positions during the transition period. Customers should expect no disruption in service.",
    question: "이 지문의 주요 내용은 무엇인가요?",
    options: [
      "두 회사의 합병 발표",
      "직원 해고 공지",
      "신제품 출시 안내",
      "서비스 중단 공지"
    ],
    answer: 0,
    translation: "GreenTech Inc.는 SolarWave Corp.와의 합병을 발표하게 되어 기쁩니다. 1월 1일부로 시행됩니다. 합병된 법인은 GreenWave Technologies라는 이름으로 운영됩니다. 두 회사의 모든 현직 직원들은 전환 기간 동안 직위를 유지할 것입니다. 고객들은 서비스 중단을 예상할 필요가 없습니다."
  },
  {
    title: "Office Renovation Notice",
    passage: "Please be advised that the third floor of Building A will undergo renovation starting March 15th. The work is expected to last approximately four weeks. Employees currently stationed on the third floor will be temporarily relocated to Building C. We apologize for any inconvenience this may cause.",
    question: "3층 직원들은 리노베이션 기간 동안 어디로 이동하나요?",
    options: [
      "Building B",
      "Building C",
      "Building A 2층",
      "재택근무"
    ],
    answer: 1,
    translation: "Building A의 3층이 3월 15일부터 리노베이션을 진행할 예정임을 알려드립니다. 공사는 약 4주간 지속될 예정입니다. 현재 3층에 근무하는 직원들은 Building C로 임시 이전됩니다. 불편을 끼쳐 드려 죄송합니다."
  },
  {
    title: "Job Posting",
    passage: "We are seeking a qualified Marketing Manager to join our team. The ideal candidate should have at least five years of experience in digital marketing and a proven track record of managing successful campaigns. Proficiency in data analysis tools is preferred. Applications must be submitted by April 30th.",
    question: "이 직책에 필요한 최소 경력은 얼마인가요?",
    options: [
      "3년",
      "4년",
      "5년",
      "7년"
    ],
    answer: 2,
    translation: "저희 팀에 합류할 자격을 갖춘 마케팅 매니저를 찾고 있습니다. 이상적인 후보자는 디지털 마케팅 분야에서 최소 5년의 경험과 성공적인 캠페인 관리 실적이 있어야 합니다. 데이터 분석 도구에 대한 숙련도가 우대됩니다. 지원서는 4월 30일까지 제출해야 합니다."
  },
  {
    title: "Customer Feedback Survey",
    passage: "Thank you for choosing Skyline Hotels. We value your opinion and would appreciate it if you could take a few minutes to complete our customer satisfaction survey. All respondents will be entered into a drawing for a chance to win a complimentary weekend stay. The survey can be accessed through the link provided in your checkout email.",
    question: "설문조사를 완료한 사람에게 주어지는 혜택은?",
    options: [
      "할인 쿠폰",
      "무료 주말 숙박 추첨 참여",
      "무료 조식",
      "포인트 적립"
    ],
    answer: 1,
    translation: "Skyline Hotels를 선택해 주셔서 감사합니다. 저희는 고객님의 의견을 소중히 여기며, 몇 분만 시간을 내어 고객 만족도 설문조사를 완료해 주시면 감사하겠습니다. 모든 응답자는 무료 주말 숙박 기회 추첨에 참여하게 됩니다. 설문조사는 체크아웃 이메일에 제공된 링크를 통해 이용할 수 있습니다."
  },
  {
    title: "Product Recall Notice",
    passage: "Apex Electronics is voluntarily recalling its Model X200 power adapter due to a potential overheating issue. Customers who purchased this product between June and September should immediately stop using it and contact our customer service at 1-800-555-0199 for a free replacement. We sincerely apologize for the inconvenience.",
    question: "고객들이 해야 할 일은 무엇인가요?",
    options: [
      "제품을 매장에 반납한다",
      "사용을 중단하고 고객 서비스에 연락한다",
      "온라인으로 환불을 신청한다",
      "새 제품을 할인 구매한다"
    ],
    answer: 1,
    translation: "Apex Electronics는 잠재적인 과열 문제로 인해 Model X200 전원 어댑터를 자발적으로 리콜합니다. 6월에서 9월 사이에 이 제품을 구매한 고객은 즉시 사용을 중단하고 무료 교체를 위해 1-800-555-0199로 고객 서비스에 연락해야 합니다. 불편을 드려 진심으로 사과드립니다."
  },
  {
    title: "Training Workshop Announcement",
    passage: "The Human Resources department will be hosting a leadership development workshop on May 10th from 9:00 AM to 4:00 PM in Conference Room B. This workshop is mandatory for all department heads and team leaders. Lunch will be provided. Please confirm your attendance by replying to this email no later than May 3rd.",
    question: "이 워크숍에 반드시 참석해야 하는 사람은 누구인가요?",
    options: [
      "모든 직원",
      "신입 직원",
      "부서장과 팀 리더",
      "인사부 직원"
    ],
    answer: 2,
    translation: "인사부는 5월 10일 오전 9시부터 오후 4시까지 회의실 B에서 리더십 개발 워크숍을 개최합니다. 이 워크숍은 모든 부서장과 팀 리더에게 의무적입니다. 점심이 제공됩니다. 5월 3일까지 이 이메일에 답장하여 참석 여부를 확인해 주세요."
  },
  {
    title: "Quarterly Sales Report",
    passage: "Total revenue for the third quarter reached $4.2 million, representing a 15% increase compared to the same period last year. The growth was primarily driven by strong performance in the Asian market, which accounted for 40% of total sales. However, the European division experienced a slight decline of 3% due to unfavorable exchange rates.",
    question: "유럽 사업부의 실적이 하락한 원인은?",
    options: [
      "경쟁 심화",
      "제품 품질 문제",
      "불리한 환율",
      "마케팅 부족"
    ],
    answer: 2,
    translation: "3분기 총 수익은 420만 달러에 달하며, 전년 동기 대비 15% 증가했습니다. 성장은 주로 아시아 시장의 강한 실적에 의해 주도되었으며, 이는 전체 매출의 40%를 차지했습니다. 그러나 유럽 사업부는 불리한 환율로 인해 3%의 소폭 하락을 경험했습니다."
  },
  {
    title: "Shipping Policy Update",
    passage: "Effective immediately, all domestic orders over $50 will qualify for free standard shipping. Express shipping remains available at a flat rate of $9.99 regardless of order size. International customers should note that delivery times may vary between 7 to 14 business days depending on the destination country. All orders include tracking information.",
    question: "무료 배송을 받으려면 최소 주문 금액은 얼마인가요?",
    options: [
      "$30",
      "$40",
      "$50",
      "$100"
    ],
    answer: 2,
    translation: "즉시 시행으로, 50달러 이상의 모든 국내 주문은 무료 표준 배송 자격이 됩니다. 빠른 배송은 주문 크기에 관계없이 $9.99의 균일 요금으로 이용 가능합니다. 해외 고객은 배송 시간이 목적지 국가에 따라 영업일 기준 7~14일 사이로 다를 수 있음을 참고하세요. 모든 주문에는 추적 정보가 포함됩니다."
  },
  {
    title: "Conference Registration",
    passage: "The annual Global Business Summit will take place from September 18th to 20th at the Grand Convention Center in Singapore. Early bird registration is available until July 31st at a discounted rate of $450, after which the standard fee of $600 will apply. Group discounts are available for companies sending five or more attendees.",
    question: "얼리버드 등록 할인 가격은 얼마인가요?",
    options: [
      "$300",
      "$450",
      "$500",
      "$600"
    ],
    answer: 1,
    translation: "연례 글로벌 비즈니스 서밋이 9월 18일부터 20일까지 싱가포르의 그랜드 컨벤션 센터에서 열립니다. 얼리버드 등록은 7월 31일까지 $450의 할인된 요금으로 이용 가능하며, 이후에는 $600의 표준 요금이 적용됩니다. 5명 이상의 참석자를 보내는 기업에 대한 단체 할인이 가능합니다."
  },
  {
    title: "Employee Benefits Update",
    passage: "Starting next quarter, the company will introduce an enhanced wellness program that includes gym membership subsidies of up to $100 per month, mental health counseling sessions, and flexible working hours. Employees who have completed their probationary period are eligible to participate. Enrollment forms are available on the company intranet.",
    question: "웰니스 프로그램에 참여할 수 있는 자격 요건은?",
    options: [
      "1년 이상 근무",
      "관리자급 이상",
      "수습 기간 완료",
      "정규직만 가능"
    ],
    answer: 2,
    translation: "다음 분기부터 회사는 월 최대 $100의 헬스장 멤버십 보조금, 정신 건강 상담 세션, 유연 근무제를 포함하는 향상된 웰니스 프로그램을 도입합니다. 수습 기간을 완료한 직원이 참여 자격이 있습니다. 등록 양식은 회사 인트라넷에서 이용 가능합니다."
  },
  {
    title: "Restaurant Review",
    passage: "Located in the heart of downtown, The Garden Bistro offers an impressive selection of organic dishes at reasonable prices. The menu changes seasonally to incorporate the freshest local ingredients. Service was prompt and attentive during our visit. The only downside was the limited parking, so we recommend taking public transportation.",
    question: "이 식당의 단점으로 언급된 것은?",
    options: [
      "높은 가격",
      "느린 서비스",
      "제한된 주차 공간",
      "적은 메뉴"
    ],
    answer: 2,
    translation: "시내 중심부에 위치한 The Garden Bistro는 합리적인 가격에 인상적인 유기농 요리를 제공합니다. 메뉴는 가장 신선한 지역 재료를 사용하기 위해 계절마다 바뀝니다. 방문 시 서비스는 신속하고 세심했습니다. 유일한 단점은 제한된 주차 공간이었으므로, 대중교통 이용을 권장합니다."
  },
  {
    title: "IT System Maintenance",
    passage: "Please be informed that scheduled maintenance will be performed on the company's email server this Saturday from 10:00 PM to 6:00 AM Sunday. During this period, email services will be temporarily unavailable. We recommend saving any important drafts before the maintenance window begins. For urgent communications, please use the company messaging app.",
    question: "시스템 점검 중 긴급 연락은 어떻게 해야 하나요?",
    options: [
      "전화를 사용한다",
      "개인 이메일을 사용한다",
      "회사 메시징 앱을 사용한다",
      "다음날까지 기다린다"
    ],
    answer: 2,
    translation: "이번 토요일 오후 10시부터 일요일 오전 6시까지 회사 이메일 서버에 정기 유지보수가 수행될 예정입니다. 이 기간 동안 이메일 서비스가 일시적으로 사용 불가능합니다. 유지보수 시작 전에 중요한 초안을 저장해 두실 것을 권장합니다. 긴급 연락은 회사 메시징 앱을 사용해 주세요."
  },
  {
    title: "Lease Agreement Terms",
    passage: "The lease agreement for the office space at 500 Commerce Street is valid for a period of three years, commencing on April 1st. Monthly rent is set at $3,500, payable by the first of each month. The tenant is responsible for utility costs. Early termination requires 90 days' written notice and payment of a penalty equal to two months' rent.",
    question: "조기 해지 시 필요한 사전 통보 기간은?",
    options: [
      "30일",
      "60일",
      "90일",
      "120일"
    ],
    answer: 2,
    translation: "500 Commerce Street 사무실 공간의 임대 계약은 4월 1일부터 시작하여 3년간 유효합니다. 월 임대료는 $3,500이며 매월 1일까지 납부해야 합니다. 세입자가 공과금을 부담합니다. 조기 해지 시 90일 전 서면 통보와 2개월분 임대료에 해당하는 위약금 납부가 필요합니다."
  },
  {
    title: "New Branch Opening",
    passage: "We are excited to announce the grand opening of our newest branch in Oakville on June 5th. To celebrate, we are offering all customers a 20% discount on their first purchase. The new location features an expanded product showroom and a dedicated customer service center. Operating hours will be Monday through Saturday, 9:00 AM to 8:00 PM.",
    question: "신규 지점의 개점 기념 할인율은?",
    options: [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    answer: 2,
    translation: "6월 5일 Oakville에 최신 지점의 그랜드 오프닝을 발표하게 되어 기쁩니다. 이를 기념하여 모든 고객에게 첫 구매 시 20% 할인을 제공합니다. 새 매장은 확장된 제품 전시실과 전담 고객 서비스 센터를 갖추고 있습니다. 운영 시간은 월요일부터 토요일, 오전 9시부터 오후 8시까지입니다."
  },
  {
    title: "Environmental Policy",
    passage: "As part of our commitment to sustainability, all departments are required to reduce paper consumption by 30% over the next fiscal year. To support this initiative, the company will provide additional digital tools and cloud storage solutions. Employees are encouraged to use double-sided printing when paper documents are necessary and to recycle all used paper.",
    question: "회사의 종이 사용 감소 목표는 얼마인가요?",
    options: [
      "10%",
      "20%",
      "30%",
      "50%"
    ],
    answer: 2,
    translation: "지속 가능성에 대한 우리의 약속의 일환으로, 모든 부서는 다음 회계 연도에 종이 소비를 30% 줄여야 합니다. 이 이니셔티브를 지원하기 위해 회사는 추가 디지털 도구와 클라우드 스토리지 솔루션을 제공할 것입니다. 직원들은 종이 문서가 필요한 경우 양면 인쇄를 사용하고 모든 사용된 종이를 재활용할 것을 권장합니다."
  },
  {
    title: "Board Meeting Minutes",
    passage: "During the board meeting held on February 12th, the directors approved the allocation of $2 million toward research and development for the upcoming fiscal year. Additionally, the board voted unanimously to appoint Ms. Sarah Chen as the new Chief Financial Officer, effective March 1st. The next board meeting is scheduled for May 15th.",
    question: "이사회에서 만장일치로 결정한 것은?",
    options: [
      "연구 개발 예산 배정",
      "새 CFO 임명",
      "다음 회의 일정",
      "배당금 인상"
    ],
    answer: 1,
    translation: "2월 12일에 열린 이사회 회의에서, 이사들은 다가오는 회계 연도의 연구 개발에 200만 달러를 배정하는 것을 승인했습니다. 또한 이사회는 Sarah Chen 씨를 3월 1일부로 새 최고재무책임자(CFO)로 임명하는 것을 만장일치로 의결했습니다. 다음 이사회 회의는 5월 15일로 예정되어 있습니다."
  },
  {
    title: "Travel Expense Policy",
    passage: "Employees traveling on company business must book flights through our designated travel agency to qualify for reimbursement. Hotel expenses are capped at $200 per night for domestic travel and $300 for international trips. Meal allowances are $60 per day. All receipts must be submitted within 14 days of returning from the trip.",
    question: "해외 출장 시 호텔 비용 한도는 1박당 얼마인가요?",
    options: [
      "$150",
      "$200",
      "$250",
      "$300"
    ],
    answer: 3,
    translation: "회사 업무로 출장하는 직원은 경비 환급 자격을 얻으려면 지정된 여행사를 통해 항공편을 예약해야 합니다. 호텔 비용은 국내 출장의 경우 1박당 $200, 해외 출장의 경우 $300로 제한됩니다. 식비는 하루 $60입니다. 모든 영수증은 출장에서 돌아온 후 14일 이내에 제출해야 합니다."
  },
  {
    title: "Inventory Management Update",
    passage: "Following the implementation of our new inventory management system, warehouse efficiency has improved by 25%. Order processing time has been reduced from 48 hours to just 12 hours. However, staff members have reported difficulties with the new barcode scanning feature. The IT department will conduct additional training sessions next week to address these concerns.",
    question: "새 시스템 도입 후 주문 처리 시간은 얼마로 줄었나요?",
    options: [
      "6시간",
      "12시간",
      "24시간",
      "36시간"
    ],
    answer: 1,
    translation: "새로운 재고 관리 시스템 도입 후, 창고 효율성이 25% 향상되었습니다. 주문 처리 시간이 48시간에서 단 12시간으로 단축되었습니다. 그러나 직원들이 새로운 바코드 스캔 기능에 어려움을 보고했습니다. IT 부서는 이러한 우려를 해결하기 위해 다음 주에 추가 교육 세션을 진행할 것입니다."
  },
  {
    title: "Warranty Claim Process",
    passage: "To file a warranty claim for any Apex Electronics product, customers must provide proof of purchase along with a detailed description of the defect. Claims can be submitted online through our website or by visiting any authorized service center. Processing typically takes 5 to 7 business days. If the claim is approved, customers may choose between a replacement unit or a full refund.",
    question: "보증 청구가 승인되면 고객이 선택할 수 있는 것은?",
    options: [
      "수리 또는 할인",
      "교체 제품 또는 전액 환불",
      "포인트 적립 또는 쿠폰",
      "무료 업그레이드 또는 연장 보증"
    ],
    answer: 1,
    translation: "Apex Electronics 제품에 대한 보증 청구를 하려면, 고객은 구매 증명서와 결함에 대한 상세한 설명을 제공해야 합니다. 청구는 웹사이트를 통해 온라인으로 또는 공인 서비스 센터를 방문하여 제출할 수 있습니다. 처리에는 일반적으로 영업일 기준 5~7일이 소요됩니다. 청구가 승인되면 고객은 교체 제품 또는 전액 환불 중 선택할 수 있습니다."
  },
  {
    title: "Annual Company Picnic",
    passage: "This year's company picnic will be held at Riverside Park on Saturday, August 8th, from 11:00 AM to 5:00 PM. Employees are welcome to bring their families. Activities include a barbecue, relay races, and a raffle with prizes. Please sign up at the front desk by July 25th so we can arrange adequate food and supplies. Transportation will be provided from the office parking lot.",
    question: "참석 신청 마감일은 언제인가요?",
    options: [
      "7월 15일",
      "7월 20일",
      "7월 25일",
      "8월 1일"
    ],
    answer: 2,
    translation: "올해 회사 야유회는 8월 8일 토요일 오전 11시부터 오후 5시까지 Riverside Park에서 열립니다. 직원들은 가족을 동반할 수 있습니다. 활동에는 바비큐, 이어달리기, 상품이 있는 추첨이 포함됩니다. 적절한 음식과 용품을 준비할 수 있도록 7월 25일까지 안내 데스크에 등록해 주세요. 사무실 주차장에서 교통편이 제공됩니다."
  },
  {
    title: "Client Proposal",
    passage: "We propose a comprehensive digital marketing strategy for your brand, including social media management, search engine optimization, and targeted email campaigns. The initial setup fee is $5,000, with a monthly retainer of $2,500. We project a 40% increase in online engagement within the first six months. A detailed timeline and deliverables are outlined in the attached document.",
    question: "월 유지비용은 얼마인가요?",
    options: [
      "$1,500",
      "$2,000",
      "$2,500",
      "$5,000"
    ],
    answer: 2,
    translation: "귀사 브랜드를 위한 소셜 미디어 관리, 검색 엔진 최적화, 타겟 이메일 캠페인을 포함하는 포괄적인 디지털 마케팅 전략을 제안합니다. 초기 설정 비용은 $5,000이며, 월 유지 비용은 $2,500입니다. 첫 6개월 내에 온라인 참여도가 40% 증가할 것으로 예상합니다. 상세한 일정과 산출물은 첨부 문서에 설명되어 있습니다."
  },
  {
    title: "Safety Inspection Report",
    passage: "The annual safety inspection of the manufacturing facility was conducted on October 3rd. While the majority of areas met compliance standards, two issues were identified: emergency exit signs on the second floor need replacement, and fire extinguishers in Section D have expired. Both issues must be resolved within 30 days to avoid penalties.",
    question: "발견된 문제를 해결해야 하는 기한은?",
    options: [
      "즉시",
      "14일 이내",
      "30일 이내",
      "60일 이내"
    ],
    answer: 2,
    translation: "제조 시설의 연간 안전 검사가 10월 3일에 실시되었습니다. 대부분의 구역이 규정 기준을 충족했지만, 두 가지 문제가 확인되었습니다: 2층의 비상 출구 표지판 교체가 필요하고, D 구역의 소화기가 만료되었습니다. 두 문제 모두 벌금을 피하기 위해 30일 이내에 해결해야 합니다."
  },
  {
    title: "Subscription Service",
    passage: "Thank you for subscribing to Premium News Daily. Your subscription includes unlimited access to all articles, exclusive interviews, and a weekly digest delivered to your inbox every Monday. Your current plan is billed annually at $99. You may cancel at any time, but please note that refunds are not available for partial billing periods.",
    question: "주간 다이제스트는 언제 발송되나요?",
    options: [
      "매주 금요일",
      "매주 일요일",
      "매주 월요일",
      "매주 수요일"
    ],
    answer: 2,
    translation: "Premium News Daily 구독에 감사드립니다. 구독에는 모든 기사에 대한 무제한 접근, 독점 인터뷰, 매주 월요일 받은편지함으로 배달되는 주간 다이제스트가 포함됩니다. 현재 요금제는 연 $99로 청구됩니다. 언제든지 취소할 수 있지만, 부분 청구 기간에 대한 환불은 불가능합니다."
  },
  {
    title: "Supplier Negotiation",
    passage: "After extensive negotiations with our primary raw material supplier, we have secured a 10% reduction in unit costs for the next two years. This agreement is contingent upon maintaining a minimum quarterly order volume of 50,000 units. The cost savings are expected to improve our profit margins by approximately 3% and allow us to offer more competitive pricing to our customers.",
    question: "비용 절감의 조건은 무엇인가요?",
    options: [
      "5년 장기 계약",
      "분기별 최소 50,000개 주문",
      "선불 결제",
      "독점 공급 계약"
    ],
    answer: 1,
    translation: "주요 원자재 공급업체와의 광범위한 협상 끝에, 향후 2년간 단가를 10% 인하하는 데 성공했습니다. 이 합의는 분기별 최소 주문량 50,000개를 유지하는 것을 조건으로 합니다. 비용 절감으로 이익률이 약 3% 개선되고 고객에게 더 경쟁력 있는 가격을 제공할 수 있을 것으로 예상됩니다."
  },
  {
    title: "Remote Work Policy",
    passage: "Effective next month, the company will adopt a hybrid work model allowing employees to work from home up to three days per week. Team meetings will be held in-person on Tuesdays and Thursdays. Employees must ensure they have a reliable internet connection and a suitable workspace at home. Managers will monitor productivity through weekly progress reports rather than daily attendance.",
    question: "사무실에서 대면 회의가 있는 요일은?",
    options: [
      "월요일과 수요일",
      "화요일과 목요일",
      "수요일과 금요일",
      "월요일과 금요일"
    ],
    answer: 1,
    translation: "다음 달부터 회사는 직원들이 주 최대 3일까지 재택근무를 할 수 있는 하이브리드 근무 모델을 도입합니다. 팀 회의는 화요일과 목요일에 대면으로 진행됩니다. 직원들은 집에서 안정적인 인터넷 연결과 적합한 작업 공간을 갖추어야 합니다. 관리자들은 일일 출석 대신 주간 진행 보고서를 통해 생산성을 모니터링합니다."
  },
  {
    title: "Award Ceremony Invitation",
    passage: "You are cordially invited to the 15th Annual Excellence Awards Ceremony, to be held on November 22nd at the Grand Ballroom of the Hilton Hotel. The evening will begin with a cocktail reception at 6:30 PM, followed by dinner and the awards presentation at 7:30 PM. Business formal attire is required. Please RSVP by November 10th.",
    question: "시상식은 몇 시에 시작하나요?",
    options: [
      "6:00 PM",
      "6:30 PM",
      "7:00 PM",
      "7:30 PM"
    ],
    answer: 3,
    translation: "11월 22일 힐튼 호텔 그랜드 볼룸에서 열리는 제15회 연례 우수상 시상식에 정중히 초대합니다. 저녁은 오후 6시 30분 칵테일 리셉션으로 시작되며, 오후 7시 30분에 저녁 식사와 시상식이 이어집니다. 비즈니스 정장 복장이 필요합니다. 11월 10일까지 참석 여부를 알려주세요."
  },
  {
    title: "Market Research Findings",
    passage: "Our recent consumer survey of 2,000 respondents revealed that 68% prefer purchasing products online rather than in physical stores. Among online shoppers, fast delivery was cited as the most important factor by 45% of respondents, followed by competitive pricing at 30% and product variety at 25%. These findings suggest we should prioritize improving our e-commerce logistics.",
    question: "온라인 쇼핑객이 가장 중요하게 여기는 요소는?",
    options: [
      "다양한 제품",
      "경쟁력 있는 가격",
      "빠른 배송",
      "고객 서비스"
    ],
    answer: 2,
    translation: "2,000명의 응답자를 대상으로 한 최근 소비자 설문조사에서 68%가 오프라인 매장보다 온라인 구매를 선호하는 것으로 나타났습니다. 온라인 쇼핑객 중 45%가 빠른 배송을 가장 중요한 요소로 꼽았고, 경쟁력 있는 가격이 30%, 제품 다양성이 25%로 뒤를 이었습니다. 이 결과는 전자 상거래 물류 개선을 우선시해야 함을 시사합니다."
  },
  {
    title: "Parking Lot Construction",
    passage: "Construction of the new employee parking garage will begin on July 1st and is expected to be completed by December 15th. During the construction period, the east parking lot will be closed. Alternative parking is available at the municipal lot on Oak Street, located approximately five minutes' walk from the office. The company will provide monthly parking passes for affected employees at no charge.",
    question: "대체 주차장에서 사무실까지 도보 거리는?",
    options: [
      "약 2분",
      "약 5분",
      "약 10분",
      "약 15분"
    ],
    answer: 1,
    translation: "새 직원 주차 건물의 공사가 7월 1일에 시작되어 12월 15일까지 완료될 예정입니다. 공사 기간 동안 동쪽 주차장은 폐쇄됩니다. 사무실에서 약 5분 도보 거리에 있는 Oak Street의 시 주차장에서 대체 주차가 가능합니다. 회사는 영향을 받는 직원들에게 무료로 월 주차권을 제공할 것입니다."
  },
  {
    title: "Product Launch Email",
    passage: "Dear valued customers, we are thrilled to introduce the all-new ProMax Wireless Headphones. Featuring 40 hours of battery life, active noise cancellation, and premium sound quality, the ProMax is designed for professionals on the go. Pre-orders begin on May 1st with an introductory price of $149, a 25% savings from the retail price of $199. Quantities are limited, so order early.",
    question: "ProMax 헤드폰의 정가(소매가)는 얼마인가요?",
    options: [
      "$99",
      "$149",
      "$179",
      "$199"
    ],
    answer: 3,
    translation: "존경하는 고객 여러분, 완전히 새로운 ProMax 무선 헤드폰을 소개하게 되어 매우 기쁩니다. 40시간의 배터리 수명, 능동형 소음 차단, 프리미엄 음질을 갖춘 ProMax는 이동 중인 전문가를 위해 설계되었습니다. 사전 주문은 5월 1일부터 시작되며, 소매가 $199에서 25% 할인된 $149의 출시 기념 가격으로 제공됩니다. 수량이 제한되어 있으니 일찍 주문하세요."
  },
  {
    title: "Health and Safety Guidelines",
    passage: "All laboratory personnel must wear appropriate protective equipment at all times, including safety goggles, gloves, and lab coats. Food and beverages are strictly prohibited in the laboratory area. Any chemical spills must be reported to the safety officer immediately. Emergency eyewash stations are located at both ends of the corridor. Failure to comply with these regulations may result in suspension of laboratory access.",
    question: "화학물질 유출 시 가장 먼저 해야 할 일은?",
    options: [
      "직접 청소한다",
      "실험실을 떠난다",
      "안전 담당관에게 즉시 보고한다",
      "동료에게 알린다"
    ],
    answer: 2,
    translation: "모든 실험실 직원은 안전 고글, 장갑, 실험복을 포함한 적절한 보호 장비를 항상 착용해야 합니다. 실험실 구역에서는 음식과 음료가 엄격히 금지됩니다. 화학물질 유출은 즉시 안전 담당관에게 보고해야 합니다. 비상 세안 시설은 복도 양쪽 끝에 있습니다. 이 규정을 준수하지 않으면 실험실 출입이 정지될 수 있습니다."
  }
];
