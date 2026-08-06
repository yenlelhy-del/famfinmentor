/* ==========================================================================
   FINPEACE FAMILY MENTORING — LANDING PAGE INTERACTIVE SCRIPT
   Program Name Standard: FinPeace Family Mentoring
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. FULL 4-QUARTER MASTER TIMELINE GRID DATA & RENDERER
     ------------------------------------------------------------------------ */
  const masterRoadmapData = {
    under18: [
      {
        quarter: "Q1",
        timeframe: "Tháng 1 – 3",
        title: "KHÁM PHÁ",
        subtitle: "Khám Phá Thói Quen & Niềm Tin Tiền Bạc",
        image: "assets/images/editorial-new/chapter-04.png",
        quote: "“Con chủ động hỏi mẹ về ngân sách sinh hoạt gia đình — điều mà 16 năm qua chưa từng xảy ra.”",
        sessions: [
          "Session 1: Family Financial Health Check — Nhận diện bức tranh ngân sách sinh hoạt gia đình.",
          "Session 2: Money Script Discovery — Khám phá niềm tin vô thức về tiền của con và cha mẹ.",
          "Session 3: Generational Storytelling — Cha mẹ kể câu chuyện lập nghiệp thật, xóa bỏ khoảng cách."
        ]
      },
      {
        quarter: "Q2",
        timeframe: "Tháng 4 – 6",
        title: "KẾT NỐI",
        subtitle: "Task-Based Learning & Hệ Thống 6 Hũ",
        image: "assets/images/editorial-new/chapter-05.png",
        quote: "“Con tự chia tiền tiêu vặt vào 6 Hũ và từ chối mua món đồ bốc đồng vì 'Hũ Hưởng thụ tháng này hết rồi mẹ ạ'.”",
        sessions: [
          "Session 4: Hệ thống 6 Hũ Cá Nhân — Phân bổ ngân sách tiêu vặt theo mục tiêu riêng của con.",
          "Session 5: Thử thách 30 ngày Cần vs Muốn — Phân biệt rõ nhu cầu thực tế và cảm xúc bốc đồng.",
          "Session 6: Shark Tank Mini Gia Đình — Con pitch ý tưởng dự án nhỏ cùng cha mẹ để nhận vốn mini."
        ]
      },
      {
        quarter: "Q3",
        timeframe: "Tháng 7 – 9",
        title: "KIẾN TẠO",
        subtitle: "Lập Ngân Sách Chuyến Đi & Hiến Chương",
        image: "assets/images/editorial-new/chapter-07.png",
        quote: "“Chuyến du lịch hè do con 15 tuổi tự lên budget từ A-Z: Vừa tiết kiệm 15% vừa gắn kết hơn bao giờ hết.”",
        sessions: [
          "Session 7: Ngân sách Chuyến đi Gia đình — Giao con làm Trưởng ban Tài chính chuyến du lịch thật.",
          "Session 8: Hiến chương Gia đình (Family Charter) — Soạn thảo và ký tên nguyên tắc ứng xử tiền bạc.",
          "Session 9: Quỹ Từ thiện & Chia sẻ — Gia đình cùng chọn dự án xã hội, gieo hạt mầm lòng biết ơn."
        ]
      },
      {
        quarter: "Q4",
        timeframe: "Tháng 10 – 12",
        title: "CHUYỂN HÓA",
        subtitle: "Tuyên Ngôn Di Sản & Họp Tài Chính",
        image: "assets/images/editorial-new/chapter-10.png",
        quote: "“Bàn ăn gia đình chính thức trở thành nơi ấm áp nhất để bàn về tương lai, thói quen và tài sản.”",
        sessions: [
          "Session 10: Tuyên ngôn Di sản — Đóng khung Tuyên ngôn giá trị gia đình tại không gian chung.",
          "Session 11: Họp Tài chính Định kỳ — Duy trì nếp họp ấm áp 30 phút mỗi tháng giữa cha mẹ và con.",
          "Session 12: Lễ Trưởng thành Tài chính — Báo cáo chuyển biến 12 tháng & trao Chứng chỉ FinPeace Family Mentoring."
        ]
      }
    ],
    over18: [
      {
        quarter: "Q1",
        timeframe: "Tháng 1 – 3",
        title: "KHÁM PHÁ",
        subtitle: "Bức Tranh Gia Sản & Cấu Trúc Tài Sản",
        image: "assets/images/editorial-new/chapter-03.png",
        quote: "“Con trai 20 tuổi xúc động khi thấy bức tranh tổng tài sản: 'Giờ con mới hiểu áp lực gánh vác của Ba'.”",
        sessions: [
          "Session 1: Family Wealth Portfolio Check — Minh bạch tổng tài sản: BĐS, cổ phiếu, nợ và bảo hiểm.",
          "Session 2: Money Mindset & Risk Profile — Đánh giá khẩu vị rủi ro và mục tiêu tài chính của con.",
          "Session 3: Định hình Vai trò Người Kế Thừa — Xác định con là Người quản trị hay Người hưởng thụ."
        ]
      },
      {
        quarter: "Q2",
        timeframe: "Tháng 4 – 6",
        title: "KẾT NỐI",
        subtitle: "Quản Lý Quỹ Tích Sản & Đầu Tư",
        image: "assets/images/editorial-new/chapter-09.png",
        quote: "“Con tự quản lý quỹ tích sản 50 triệu, trải nghiệm quản trị rủi ro thực tế trên thị trường.”",
        sessions: [
          "Session 4: Quỹ Tích Sản Cá Nhân (20-50M) — Con lập và nộp kế hoạch phân bổ vốn thực tế.",
          "Session 5: Quản trị Rủi ro & Tâm lý Đầu tư — Kỷ luật ứng phó biến động thị trường không cảm xúc.",
          "Session 6: Wealth Plan 5 Năm Cho Con — Xây dựng mục tiêu mua nhà, du học hoặc khởi nghiệp."
        ]
      },
      {
        quarter: "Q3",
        timeframe: "Tháng 7 – 9",
        title: "KIẾN TẠO",
        subtitle: "Cấu Trúc Kế Thừa & Đề Án 90 Ngày",
        image: "assets/images/editorial-new/chapter-06.png",
        quote: "“Hiến chương và Di chúc gia đình chuẩn bị trong đồng thuận 100%, xóa tan u u ám né tránh.”",
        sessions: [
          "Session 7: Đề án Thực tế 90 Ngày — Con trực tiếp quản lý danh mục/dự án nhỏ của gia đình.",
          "Session 8: Cấu trúc Pháp lý Di chúc — Tham vấn chuyên gia cấu trúc Holding, Trust & Di chúc.",
          "Session 9: Hiến Chương Gia Sản Kế Thừa — Quy định điều kiện thừa kế và quỹ dự phòng liên thế hệ."
        ]
      },
      {
        quarter: "Q4",
        timeframe: "Tháng 10 – 12",
        title: "CHUYỂN HÓA",
        subtitle: "Hội Đồng Gia Sản & Tự Do Tài Chính",
        image: "assets/images/editorial-new/chapter-10.png",
        quote: "“Gia sản gia đình có cấu trúc bảo vệ kiên cố và người tiếp nối đầy đủ bản lĩnh quản trị.”",
        sessions: [
          "Session 10: Thành lập Hội đồng Gia sản — Con có ghế chính thức trong cuộc họp tài sản định kỳ.",
          "Session 11: Đóng khung Tuyên ngôn Di sản — Bàn giao văn bản di sản liên thế hệ FinPeace Family Mentoring.",
          "Session 12: Tổng kết 1 Year Transformation — Đánh giá sự trưởng thành năng lực tài chính của con."
        ]
      }
    ]
  };

  let currentAgeTrack = 'under18';

  function renderMasterRoadmap() {
    const container = document.getElementById('roadmap-timeline-grid');
    if (!container) return;

    const quarters = masterRoadmapData[currentAgeTrack];
    container.innerHTML = quarters.map(q => `
      <div class="roadmap-quarter-card">
        <div class="rq-header">
          <span class="rq-badge">${q.quarter} · ${q.timeframe}</span>
          <h3 class="rq-title">${q.title}</h3>
          <p class="rq-subtitle">${q.subtitle}</p>
        </div>
        <div class="rq-image-wrap">
          <img src="${q.image}" alt="${q.title}">
        </div>
        <div class="rq-body">
          <h4 class="rq-session-heading">Hoạt động Sessions:</h4>
          <div class="rq-session-blur-wrap">
            <ul class="rq-session-list blurred">
              ${q.sessions.map(s => `
                <li>
                  <svg class="icon-svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>${s}</span>
                </li>
              `).join('')}
            </ul>
            <div class="rq-session-overlay">
              <svg class="icon-svg" viewBox="0 0 24 24" style="width: 22px; height: 22px; stroke: var(--primary-green); margin-bottom: 6px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <span style="font-size: 0.775rem; font-weight: 700; color: var(--deep-forest); margin-bottom: 8px; font-family: var(--font-mono); text-transform: uppercase;">Lộ trình cá nhân hoá</span>
              <a href="#session0" class="rq-session-overlay-btn open-modal-btn">Đăng ký Session 0 →</a>
            </div>
          </div>
          <div class="rq-outcome-box">
            <span class="rq-outcome-label">Chuyển hóa nhận được:</span>
            <p class="rq-outcome-quote">${q.quote}</p>
          </div>
        </div>
      </div>
    `).join('');
    bindModalEvents();
  }

  // Age Track Switcher Buttons
  const trackBtns = document.querySelectorAll('.track-btn');
  trackBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      trackBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAgeTrack = btn.dataset.track;
      renderMasterRoadmap();
    });
  });

  renderMasterRoadmap();


  /* ------------------------------------------------------------------------
     2. INTERACTIVE FAMILY READINESS QUIZ WIDGET (HERO SECTION)
     ------------------------------------------------------------------------ */
  const quizSteps = [
    {
      question: "1. Con của cha mẹ hiện đang ở độ tuổi nào?",
      options: [
        { text: "8 – 12 tuổi (Giai đoạn gieo hạt thói quen)", score: 10 },
        { text: "13 – 17 tuổi (Giai đoạn vàng quản lý dòng tiền)", score: 20 },
        { text: "Trên 18 tuổi (Giai đoạn chiến lược tích sản & kế thừa)", score: 25 }
      ]
    },
    {
      question: "2. Gia đình mình đã từng đối thoại cởi mở về ngân sách & tài sản chưa?",
      options: [
        { text: "Chưa bao giờ — Ngượng ngùng hoặc né tránh chuyện tiền bạc", score: 5 },
        { text: "Thỉnh thoảng — Chỉ nói khi có sự cố chi tiêu", score: 15 },
        { text: "Thường xuyên — Nhưng chưa có hệ thống hay chuẩn mực chung", score: 25 }
      ]
    },
    {
      question: "3. Trăn trở lớn nhất của cha mẹ đối với con hiện tại là gì?",
      options: [
        { text: "Lo con chi tiêu nông nổi, FOMO theo bạn bè", score: 15 },
        { text: "Lo con thụ động, chưa biết trân trọng công sức cha mẹ", score: 20 },
        { text: "Lo con chưa đủ năng lực gánh vác & gìn giữ gia sản", score: 25 }
      ]
    }
  ];

  let currentStep = 0;
  let totalScore = 0;

  const quizContainer = document.getElementById('hero-quiz-container');

  function renderQuiz() {
    if (!quizContainer) return;

    if (currentStep < quizSteps.length) {
      const stepData = quizSteps[currentStep];
      quizContainer.innerHTML = `
        <div class="quiz-card-content">
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${((currentStep + 1) / quizSteps.length) * 100}%"></div>
          </div>
          <span class="quiz-step-label">Trắc nghiệm nhanh (Bước ${currentStep + 1}/${quizSteps.length})</span>
          <h3 class="quiz-question-title">${stepData.question}</h3>
          <div class="quiz-options-list">
            ${stepData.options.map((opt, idx) => `
              <button class="quiz-option-btn" data-score="${opt.score}">
                <span class="quiz-opt-num">${String.fromCharCode(65 + idx)}</span>
                <span>${opt.text}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;

      document.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const score = parseInt(btn.dataset.score, 10);
          totalScore += score;
          currentStep++;
          renderQuiz();
        });
      });
    } else {
      let resultText = "";
      let adviceText = "";

      if (totalScore >= 60) {
        resultText = "Gia Đình Đang Trong 'Cửa Sổ Vàng' Giáo Dục Tài Chính!";
        adviceText = "Con của cha mẹ đã có nền tảng nhận thức tốt. Đây là thời điểm chiến lược nhất để đưa con vào chương trình FinPeace Family Mentoring, chuẩn bị kế thừa gia sản.";
      } else if (totalScore >= 35) {
        resultText = "Con Cần Hệ Thống 6 Hũ & Kênh Đối Thoại Mở!";
        adviceText = "Gia đình có tinh thần cởi mở nhưng thiếu khuôn khổ quản trị dòng tiền. Chương trình FinPeace Family Mentoring sẽ giúp gia đình xây dựng thói quen thấu hiểu trong 12 tháng.";
      } else {
        resultText = "Cần Mở Kênh Đối Thoại An Toàn Đầu Tiên!";
        adviceText = "Rào cản tâm lý né tránh tiền bạc đang ngăn cản con hiểu công sức cha mẹ. Session 0 Miễn Phí (60 phút) sẽ giúp xóa bỏ khoảng cách này.";
      }

      quizContainer.innerHTML = `
        <div class="quiz-result-card">
          <div class="quiz-score-badge">Điểm Sẵn Sàng: ${totalScore}/75</div>
          <h3 style="font-family: var(--font-headline); font-size: 1.3rem; font-weight: 700; color: #ffffff; margin-bottom: 10px;">${resultText}</h3>
          <p style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 20px; line-height: 1.6;">${adviceText}</p>
          <button class="btn-primary open-modal-btn" style="width: 100%; background: var(--primary-green);">Đăng ký Session 0 Trải Nghiệm (60 Phút) →</button>
          <button class="quiz-restart-btn" id="restart-quiz-btn">↻ Làm lại trắc nghiệm</button>
        </div>
      `;

      document.getElementById('restart-quiz-btn').addEventListener('click', () => {
        currentStep = 0;
        totalScore = 0;
        renderQuiz();
      });

      bindModalEvents();
    }
  }

  renderQuiz();


  /* ------------------------------------------------------------------------
     3. FAQ ACCORDION
     ------------------------------------------------------------------------ */
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });


  /* ------------------------------------------------------------------------
     4. REGISTRATION MODAL SYSTEM
     ------------------------------------------------------------------------ */
  const modal = document.getElementById('session-modal');
  const modalCloseBtn = document.getElementById('modal-close');

  function bindModalEvents() {
    const modalBtns = document.querySelectorAll('.open-modal-btn');
    modalBtns.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        if (modal) modal.classList.add('active');
      };
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.onclick = () => {
      if (modal) modal.classList.remove('active');
    };
  }

  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    };
  }

  bindModalEvents();

  const sessionForm = document.getElementById('session-form');
  if (sessionForm) {
    sessionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Cảm ơn Cha Mẹ! Chuyên gia FinPeace Family Mentoring sẽ liên hệ trong vòng 24h để sắp xếp lịch Session 0.');
      if (modal) modal.classList.remove('active');
      sessionForm.reset();
    });
  }


  /* ------------------------------------------------------------------------
     5. MOBILE NAVIGATION DRAWER
     ------------------------------------------------------------------------ */
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      mobileToggle.classList.toggle('active');
    });
  }

});
