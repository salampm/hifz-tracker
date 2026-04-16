// Main Application Logic

const SURAHS = [{ n: 1, name: "Al-Fatiha", ayat: 7 }, { n: 2, name: "Al-Baqarah", ayat: 286 }, { n: 3, name: "Aal-e-Imran", ayat: 200 }, { n: 4, name: "An-Nisa", ayat: 176 }, { n: 5, name: "Al-Ma'idah", ayat: 120 }, { n: 6, name: "Al-An'am", ayat: 165 }, { n: 7, name: "Al-A'raf", ayat: 206 }, { n: 8, name: "Al-Anfal", ayat: 75 }, { n: 9, name: "At-Tawbah", ayat: 129 }, { n: 10, name: "Yunus", ayat: 109 }, { n: 11, name: "Hud", ayat: 123 }, { n: 12, name: "Yusuf", ayat: 111 }, { n: 13, name: "Ar-Ra'd", ayat: 43 }, { n: 14, name: "Ibrahim", ayat: 52 }, { n: 15, name: "Al-Hijr", ayat: 99 }, { n: 16, name: "An-Nahl", ayat: 128 }, { n: 17, name: "Al-Isra", ayat: 111 }, { n: 18, name: "Al-Kahf", ayat: 110 }, { n: 19, name: "Maryam", ayat: 98 }, { n: 20, name: "Ta-Ha", ayat: 135 }, { n: 21, name: "Al-Anbiya", ayat: 112 }, { n: 22, name: "Al-Hajj", ayat: 78 }, { n: 23, name: "Al-Mu'minun", ayat: 118 }, { n: 24, name: "An-Nur", ayat: 64 }, { n: 25, name: "Al-Furqan", ayat: 77 }, { n: 26, name: "Ash-Shu'ara", ayat: 227 }, { n: 27, name: "An-Naml", ayat: 93 }, { n: 28, name: "Al-Qasas", ayat: 88 }, { n: 29, name: "Al-Ankabut", ayat: 69 }, { n: 30, name: "Ar-Rum", ayat: 60 }, { n: 31, name: "Luqman", ayat: 34 }, { n: 32, name: "As-Sajdah", ayat: 30 }, { n: 33, name: "Al-Ahzab", ayat: 73 }, { n: 34, name: "Saba", ayat: 54 }, { n: 35, name: "Fatir", ayat: 45 }, { n: 36, name: "Ya-Sin", ayat: 83 }, { n: 37, name: "As-Saffat", ayat: 182 }, { n: 38, name: "Sad", ayat: 88 }, { n: 39, name: "Az-Zumar", ayat: 75 }, { n: 40, name: "Ghafir", ayat: 85 }, { n: 41, name: "Fussilat", ayat: 54 }, { n: 42, name: "Ash-Shura", ayat: 53 }, { n: 43, name: "Az-Zukhruf", ayat: 89 }, { n: 44, name: "Ad-Dukhan", ayat: 59 }, { n: 45, name: "Al-Jathiyah", ayat: 37 }, { n: 46, name: "Al-Ahqaf", ayat: 35 }, { n: 47, name: "Muhammad", ayat: 38 }, { n: 48, name: "Al-Fath", ayat: 29 }, { n: 49, name: "Al-Hujurat", ayat: 18 }, { n: 50, name: "Qaf", ayat: 45 }, { n: 51, name: "Adh-Dhariyat", ayat: 60 }, { n: 52, name: "At-Tur", ayat: 49 }, { n: 53, name: "An-Najm", ayat: 62 }, { n: 54, name: "Al-Qamar", ayat: 55 }, { n: 55, name: "Ar-Rahman", ayat: 78 }, { n: 56, name: "Al-Waqi'ah", ayat: 96 }, { n: 57, name: "Al-Hadid", ayat: 29 }, { n: 58, name: "Al-Mujadila", ayat: 22 }, { n: 59, name: "Al-Hashr", ayat: 24 }, { n: 60, name: "Al-Mumtahanah", ayat: 13 }, { n: 61, name: "As-Saf", ayat: 14 }, { n: 62, name: "Al-Jumu'ah", ayat: 11 }, { n: 63, name: "Al-Munafiqun", ayat: 11 }, { n: 64, name: "At-Taghabun", ayat: 18 }, { n: 65, name: "At-Talaq", ayat: 12 }, { n: 66, name: "At-Tahrim", ayat: 12 }, { n: 67, name: "Al-Mulk", ayat: 30 }, { n: 68, name: "Al-Qalam", ayat: 52 }, { n: 69, name: "Al-Haqqah", ayat: 52 }, { n: 70, name: "Al-Ma'arij", ayat: 44 }, { n: 71, name: "Nuh", ayat: 28 }, { n: 72, name: "Al-Jinn", ayat: 28 }, { n: 73, name: "Al-Muzzammil", ayat: 20 }, { n: 74, name: "Al-Muddaththir", ayat: 56 }, { n: 75, name: "Al-Qiyamah", ayat: 40 }, { n: 76, name: "Al-Insan", ayat: 31 }, { n: 77, name: "Al-Mursalat", ayat: 50 }, { n: 78, name: "An-Naba", ayat: 40 }, { n: 79, name: "An-Nazi'at", ayat: 46 }, { n: 80, name: "Abasa", ayat: 42 }, { n: 81, name: "At-Takwir", ayat: 29 }, { n: 82, name: "Al-Infitar", ayat: 19 }, { n: 83, name: "Al-Mutaffifin", ayat: 36 }, { n: 84, name: "Al-Inshiqaq", ayat: 25 }, { n: 85, name: "Al-Buruj", ayat: 22 }, { n: 86, name: "At-Tariq", ayat: 17 }, { n: 87, name: "Al-A'la", ayat: 19 }, { n: 88, name: "Al-Ghashiyah", ayat: 26 }, { n: 89, name: "Al-Fajr", ayat: 30 }, { n: 90, name: "Al-Balad", ayat: 20 }, { n: 91, name: "Ash-Shams", ayat: 15 }, { n: 92, name: "Al-Layl", ayat: 21 }, { n: 93, name: "Ad-Duha", ayat: 11 }, { n: 94, name: "Ash-Sharh", ayat: 8 }, { n: 95, name: "At-Tin", ayat: 8 }, { n: 96, name: "Al-Alaq", ayat: 19 }, { n: 97, name: "Al-Qadr", ayat: 5 }, { n: 98, name: "Al-Bayyinah", ayat: 8 }, { n: 99, name: "Az-Zalzalah", ayat: 8 }, { n: 100, name: "Al-Adiyat", ayat: 11 }, { n: 101, name: "Al-Qari'ah", ayat: 11 }, { n: 102, name: "At-Takathur", ayat: 8 }, { n: 103, name: "Al-Asr", ayat: 3 }, { n: 104, name: "Al-Humazah", ayat: 9 }, { n: 105, name: "Al-Fil", ayat: 5 }, { n: 106, name: "Quraysh", ayat: 4 }, { n: 107, name: "Al-Ma'un", ayat: 7 }, { n: 108, name: "Al-Kawthar", ayat: 3 }, { n: 109, name: "Al-Kafirun", ayat: 6 }, { n: 110, name: "An-Nasr", ayat: 3 }, { n: 111, name: "Al-Masad", ayat: 5 }, { n: 112, name: "Al-Ikhlas", ayat: 4 }, { n: 113, name: "Al-Falaq", ayat: 5 }, { n: 114, name: "An-Nas", ayat: 6 }];

var _E = {
    moon: '\uD83C\uDF19', cal: '\uD83D\uDCC5', books: '\uD83D\uDCDA', person: '\uD83D\uDC64',
    green: '\uD83D\uDCD7', orange: '\uD83D\uDCD9', blue: '\uD83D\uDCD8', star: '\u2B50',
    memo: '\uD83D\uDCDD', pray: '\uD83E\uDD32', chat: '\uD83D\uDCAC', red: '\uD83D\uDD34',
    wave: '\uD83D\uDC4B', dash: '\u2014', salam: '\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u0645',
    jsi: '*JSI \u2014 Jamia Swahaba Al-Islamia*'
};

function buildAbsentMsg(name, date) {
    return _E.salam + ' ' + _E.moon + '\n\n' + _E.jsi + '\n' + _E.cal + ' ' + date + '\n\nDear Parent,\n\nYour child *' + name + '* was *absent* today from Hifz class.\n\nPlease share the reason at your earliest convenience.\n\nJazakAllah Khair ' + _E.pray + '\n_Hifz Department_';
}

function buildReportMsg(e, s, teacher, date) {
    return _E.salam + ' ' + _E.moon + '\n\n' + _E.jsi + '\n' + _E.cal + ' ' + date + '\n\n' + _E.books + ' *Daily Hifz Report*\n' + _E.person + ' *' + s.name + '*\n\n' + _E.green + ' *Sabaq:* ' + (e.sabaqSurah ? e.sabaqSurah + ' (' + e.sabaqFrom + '-' + e.sabaqTo + ')' : _E.dash) + '\n' + _E.orange + ' *Sabaq Para:* ' + (e.sabqiText || _E.dash) + '\n' + _E.blue + ' *Muraaja:* ' + (e.manzilText || _E.dash) + '\n\n' + _E.star + ' *Grades:*\nTajweed: ' + e.tajweed + '/10 | Hifz: ' + e.retention + '/10\nPunctuality: ' + (e.punctuality || _E.dash) + '/10 | Discipline: ' + (e.discipline || _E.dash) + '/10\n' + _E.chat + ' *Teacher Remark:* ' + (e.remark || _E.dash) + '\n' + _E.memo + ' *Homework:* ' + (e.homework || _E.dash) + '\n\nJazakAllah Khair ' + _E.pray + '\n_' + (teacher || 'Hifz Department') + '_';
}

function buildNoEntryMsg(name) {
    return _E.salam + ' ' + _E.moon + '\n' + _E.jsi + '\nDear Parent of *' + name + '*, today\'s Hifz report will be shared shortly. JazakAllah ' + _E.pray;
}

function formatPhone(p) {
    var c = (p || '').replace(/\D/g, '');
    if (c.length === 10) c = '91' + c;
    return c;
}

function waOpen(phone, msg) {
    window.location.href = 'whatsapp://send?phone=' + phone + '&text=' + encodeURIComponent(msg);
}

// STATE
window.students = [];
window.currentStudentId = null;
window.currentView = 'dashboard';
window.db = null;
window.fb = null;

const today = () => new Date().toISOString().split('T')[0];
const todayDisplay = () => new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

function waitForFirebase(cb) {
    if (window._firebaseReady) {
        window.db = window._db;
        window.fb = window._firebase;
        cb();
    } else {
        window.addEventListener('firebaseReady', () => {
            window.db = window._db;
            window.fb = window._firebase;
            cb();
        });
    }
}

function loadStudents() {
    var q = fb.collection(db, 'students');
    fb.onSnapshot(q, snap => {
        window.students = [];
        snap.forEach(d => window.students.push({ id: d.id, ...d.data() }));
        setTimeout(loadStudentStatuses, 200);
        if (currentView === 'dashboard' || currentView === 'students') renderAppView();
    });
}

function navigate(view, data) {
    window.currentView = view;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    var navMap = { dashboard: 'nav-dashboard', students: 'nav-students', enroll: 'nav-enroll', reports: 'nav-reports' };
    if (navMap[view]) {
        const navEl = document.getElementById(navMap[view]);
        if (navEl) navEl.classList.add('active');
    }
    if (view === 'admin') {
        const adminBtn = document.getElementById('adminNavBtn');
        if (adminBtn) adminBtn.classList.add('active');
    }
    renderAppView(data);
}

function renderAppView(data) {
    var c = document.getElementById('appContent');
    if (!c) return;
    var titles = { dashboard: 'JSI Hifz Pro', students: 'Students', enroll: 'Enroll Student', reports: 'Reports', admin: 'Administration', profile: 'Student Profile', entry: 'Daily Entry' };
    var subs = { dashboard: 'Dashboard', students: 'All Students', enroll: 'New Enrollment', reports: 'Generate Reports', admin: 'Admin Panel', profile: 'Profile & History', entry: 'Hifz Entry' };
    
    const titleEl = document.getElementById('topBarTitle');
    if (titleEl) titleEl.textContent = titles[currentView] || 'JSI Hifz Pro';
    
    const subEl = document.getElementById('topBarSub');
    if (subEl) {
        var roleTag = window.currentUser?.role ? ` <span style="background:rgba(255,255,255,0.15);font-size:0.55rem;padding:1px 6px;border-radius:999px;text-transform:uppercase;letter-spacing:0.06em;vertical-align:middle">${window.currentUser.role}</span>` : '';
        subEl.innerHTML = (subs[currentView] || '') + roleTag;
    }

    switch (currentView) {
        case 'dashboard': c.innerHTML = renderDashboard(); setTimeout(loadStudentStatuses, 100); break;
        case 'students': c.innerHTML = renderStudents(); break;
        case 'enroll': c.innerHTML = renderEnroll(); break;
        case 'reports': c.innerHTML = renderReports(); break;
        case 'admin': c.innerHTML = renderAdmin(); loadAdminUsers(); break;
        case 'profile': c.innerHTML = renderProfile(data); loadProfileData(data); break;
        case 'entry': c.innerHTML = renderEntry(data); break;
        case 'users': c.innerHTML = renderUserManagement(); loadUsers(); break;
    }
}

function renderDashboard() {
    var active = window.students.filter(s => !s.archived).length;
    var todayEntries = window.students.filter(s => s.lastEntryDate === today()).length;
    var absent = window.students.filter(s => s.absentToday && s.lastEntryDate === today()).length;
    loadPendingReports();
    loadClassAttention();
    return `<div class="dashboard-header">
    <div class="dash-greeting">Welcome back,</div>
    <div class="dash-name">${window.currentUser?.name || window.currentUser?.username || 'Teacher'} \uD83D\uDC4B</div>
    <div class="dash-date">${todayDisplay()}</div>
  </div>
  <div class="stats-row">
    <div class="stat-card"><div class="stat-num">${active}</div><div class="stat-lbl">Students</div></div>
    <div class="stat-card"><div class="stat-num">${todayEntries}</div><div class="stat-lbl">Entries Today</div></div>
    <div class="stat-card"><div class="stat-num">${absent}</div><div class="stat-lbl">Absent</div></div>
  </div>
  <div class="section-title">Pending Reports</div>
<div id="pendingReports"></div>

<div class="section-title">Classes Needing Attention</div>
<div id="classAttention"></div>

<div class="section-title">Recent Activity</div>

<div style="display:flex;gap:6px;padding:0.5rem 1rem;flex-wrap:wrap" id="statusFilters">
<button class="class-chip active" onclick="filterStatus('all',this)">All</button>
<button class="class-chip" onclick="filterStatus('noentry',this)">No Entry</button>
<button class="class-chip" onclick="filterStatus('absent',this)">Absent</button>
<button class="class-chip" onclick="filterStatus('sent',this)">Report Sent</button>
</div>
  ${window.students.filter(s => !s.archived).slice(0, 5).map(s => studentCard(s)).join('') || '<div class="empty-state"><div class="empty-state-icon">\uD83D\uDCDA</div><div class="empty-state-text">No students yet. Enroll your first student!</div></div>'}
  <div style="padding:1rem"><button class="btn-primary" onclick="navigate('students')">View All Students</button></div>`;
}

function renderStudents() {
    var view = window.studentView || 'active';
    var list = view === 'archived' ? window.students.filter(s => s.archived) : window.students.filter(s => !s.archived);
    var classList = [...new Set(window.students.map(s => s.class).filter(Boolean))];

    return `<div style="position:sticky;top:0;background:var(--slate);z-index:5;padding-top:0.5rem">
    <div class="tab-bar" style="margin-top:10px">
      <button class="tab ${view === 'active' ? 'active' : ''}" onclick="switchStudentView('active')">Active</button>
      <button class="tab ${view === 'archived' ? 'active' : ''}" onclick="switchStudentView('archived')">Archived</button>
    </div>
    <div class="search-wrap">
      <svg class="search-icon" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input class="search-input" id="studentSearch" placeholder="Search students..." oninput="filterStudents()" />
    </div>
    <div class="class-filter">
      <button class="class-chip active" data-class="all" onclick="filterByClass(this,'all')">All</button>
      ${classList.map(c => `<button class="class-chip" data-class="${c}" onclick="filterByClass(this,'${c}')">${c}</button>`).join('')}
    </div>
  </div>
  <div id="studentList">
  ${list.map(s => studentCard(s)).join('') || '<div class="empty-state"><div class="empty-state-icon">\uD83C\uDF93</div><div class="empty-state-text">No students found</div></div>'}
  </div>`;
}

function studentCard(s) {
    var letter = (s.name || '?').charAt(0).toUpperCase();
    var isAbsent = s.absentToday && s.lastEntryDate === today();
    var primaryPhone = s.motherPhone || s.fatherPhone || '';
    var waPhoneAttr = primaryPhone ? `onclick="waParent('${s.id}')"` : '';
    return `<div class="student-item ${isAbsent ? 'absent-today' : ''}" onclick="openProfile('${s.id}')">
    <div class="student-item-top">
      <div class="avatar">${letter}</div>
      <div class="student-info">
        <div class="student-name" style="display:flex;align-items:center;gap:6px">
${s.name}
<span id="status-${s.id}" style="font-size:0.65rem;font-weight:700;padding:2px 6px;border-radius:999px"></span>
</div>
        <div class="student-meta">Roll ${s.rollNo} \u00B7 ${s.class || 'No Class'} \u00B7 Juz ${s.startingJuz || '?'}</div>
      </div>
    </div>
    <div class="student-item-actions" onclick="event.stopPropagation()">
      ${primaryPhone ? `<button class="quick-btn call" onclick="callParent('${primaryPhone}')"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg></button>` : ''}
      ${primaryPhone ? `<button class="quick-btn wa" ${waPhoneAttr}><svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.018 0C5.376 0 0 5.373 0 11.997c0 2.117.554 4.102 1.523 5.833L.026 23.534a.5.5 0 0 0 .612.612l5.754-1.509A11.942 11.942 0 0 0 12.018 24C18.643 24 24 18.618 24 12S18.643 0 12.018 0zm0 21.818a9.766 9.766 0 0 1-5.006-1.374l-.36-.213-3.715.974.992-3.622-.234-.373A9.747 9.747 0 0 1 2.18 12c0-5.426 4.413-9.836 9.838-9.836 5.427 0 9.84 4.41 9.84 9.836 0 5.427-4.413 9.818-9.84 9.818z"/></svg></button>` : ''}
      <button class="quick-btn entry" onclick="openEntry('${s.id}')"><svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
    </div>
  </div>`;
}

function switchStudentView(view) {
    window.studentView = view;
    renderAppView();
}

function filterStudents() {
    var q = document.getElementById('studentSearch')?.value.toLowerCase() || '';
    var activeClass = document.querySelector('.class-chip.active')?.dataset.class || 'all';
    var list = document.getElementById('studentList'); if (!list) return;
    var filtered = window.students.filter(s => {
        if (s.archived && window.studentView !== 'archived') return false;
        if (!s.archived && window.studentView === 'archived') return false;
        var matchQ = !q || s.name?.toLowerCase().includes(q) || String(s.rollNo).includes(q);
        var matchC = activeClass === 'all' || s.class === activeClass;
        return matchQ && matchC;
    });
    list.innerHTML = filtered.map(s => studentCard(s)).join('') || '<div class="empty-state"><div class="empty-state-icon">\uD83D\uDD0D</div><div class="empty-state-text">No students found</div></div>';
}

function filterByClass(el, cls) {
    document.querySelectorAll('.class-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    filterStudents();
}

function openProfile(id) {
    window.currentStudentId = id;
    navigate('profile', id);
}

function renderProfile(id) {
    var s = window.students.find(s => s.id === id) || {};
    var letter = (s.name || '?').charAt(0).toUpperCase();
    return `<div class="profile-header" style="position:relative">
    <button class="back-btn" onclick="navigate('students')" style="position:absolute;top:1rem;left:1rem"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
    <div class="profile-avatar">${letter}</div>
    <div class="profile-name">${s.name || ''}</div>
    <div class="profile-meta">Roll ${s.rollNo || ''} \u00B7 ${s.class || 'No Class'} \u00B7 Starting Juz ${s.startingJuz || '?'}</div>
    ${s.archived ? '<div style="margin-top:0.5rem"><span class="archived-badge">Archived</span></div>' : ''}
  </div>
 <div style="padding:0.75rem 1rem 0;display:flex;gap:0.5rem;flex-wrap:wrap">
    <button class="btn-sm" onclick="openEntry('${id}')">\uD83D\uDCDD Daily Entry</button>
    <button class="btn-sm" onclick="editStudent('${id}')">\u270F\uFE0F Edit</button>
    <button class="btn-danger-sm" onclick="archiveStudent('${id}',${s.archived})">${s.archived ? '\u267B\uFE0F Restore' : '\uD83D\uDDC3\uFE0F Archive'}</button>
    <button class="btn-danger-sm" onclick="confirmDeleteStudent('${id}','${s.name}')">\uD83D\uDDD1\uFE0F Delete</button>
  </div>
  ${s.notes ? `<div class="notes-badge" style="margin-top:0.75rem">\uD83D\uDCCC ${s.notes}</div>` : ''}
  <div class="section-title">Parent Contacts</div>
  ${s.motherName || s.motherPhone ? `<div class="parent-card"><div class="parent-row"><div><div class="parent-type">Mother</div><div class="parent-name">${s.motherName || '\u2014'}</div>${s.motherPhone ? `<div class="parent-phone">${s.motherPhone}</div>` : ''}</div><div class="quick-actions">${s.motherPhone ? `<button class="quick-btn call" onclick="callParent('${s.motherPhone}')"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg></button>` : ''}${s.motherPhone ? `<button class="quick-btn wa" onclick="waParent('${id}')"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.018 0C5.376 0 0 5.373 0 11.997c0 2.117.554 4.102 1.523 5.833L.026 23.534a.5.5 0 0 0 .612.612l5.754-1.509A11.942 11.942 0 0 0 12.018 24C18.643 24 24 18.618 24 12S18.643 0 12.018 0zm0 21.818a9.766 9.766 0 0 1-5.006-1.374l-.36-.213-3.715.974.992-3.622-.234-.373A9.747 9.747 0 0 1 2.18 12c0-5.426 4.413-9.836 9.838-9.836 5.427 0 9.84 4.41 9.84 9.836 0 5.427-4.413 9.818-9.84 9.818z"/></svg></button>` : ''}</div></div></div>` : ''} 
  ${s.fatherName || s.fatherPhone ? `<div class="parent-card"><div class="parent-row"><div><div class="parent-type">Father</div><div class="parent-name">${s.fatherName || '\u2014'}</div>${s.fatherPhone ? `<div class="parent-phone">${s.fatherPhone}</div>` : ''}</div><div class="quick-actions">${s.fatherPhone ? `<button class="quick-btn call" onclick="callParent('${s.fatherPhone}')"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg></button>` : ''}${s.fatherPhone ? `<button class="quick-btn wa" onclick="waParentFather('${s.fatherPhone}','${s.name}')"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.018 0C5.376 0 0 5.373 0 11.997c0 2.117.554 4.102 1.523 5.833L.026 23.534a.5.5 0 0 0 .612.612l5.754-1.509A11.942 11.942 0 0 0 12.018 24C18.643 24 24 18.618 24 12S18.643 0 12.018 0zm0 21.818a9.766 9.766 0 0 1-5.006-1.374l-.36-.213-3.715.974.992-3.622-.234-.373A9.747 9.747 0 0 1 2.18 12c0-5.426 4.413-9.836 9.838-9.836 5.427 0 9.84 4.41 9.84 9.836 0 5.427-4.413 9.818-9.84 9.818z"/></svg></button>` : ''}</div></div></div>` : ''}
  <div class="tab-bar" style="margin-top:10px">
    <button class="tab active" onclick="switchProfileTab(this,'history')">\uD83D\uDCDC History</button>
    <button class="tab" onclick="switchProfileTab(this,'stats')">\uD83D\uDCCA Stats</button>
  </div>
  <div id="profileTabContent"><div class="loading"><div class="spinner"></div> Loading...</div></div>`;
}

function switchProfileTab(el, tab) { 
    document.querySelectorAll('.tab-bar .tab').forEach(t => t.classList.remove('active')); 
    el.classList.add('active'); 
    if (tab === 'history') loadHistoryTab(); 
    else loadStatsTab(); 
}

async function loadProfileData(id) { loadHistoryTab(); }

async function loadHistoryTab() {
    var cont = document.getElementById('profileTabContent'); if (!cont) return;
    try {
        var q = fb.query(fb.collection(db, 'entries'), fb.where('studentId', '==', window.currentStudentId), fb.orderBy('date', 'desc'));
        var snap = await fb.getDocs(q); var entries = [];
        snap.forEach(d => entries.push(d.data()));
        if (entries.length === 0) { cont.innerHTML = '<div class="empty-state"><div class="empty-state-icon">\uD83D\uDCD6</div><div class="empty-state-text">No entries yet</div></div>'; return; }
        cont.innerHTML = entries.map(e => `<div class="history-item">
      <div class="history-date">${e.date} ${e.absent ? '\uD83D\uDD34 Absent' : ''}</div>
      ${!e.absent ? `<div class="history-row">
        ${e.sabaqSurah ? `<span class="history-tag tag-sabaq">\uD83D\uDCD7 Sabaq: ${e.sabaqSurah} ${e.sabaqFrom}-${e.sabaqTo}</span>` : ''}
        ${e.sabqiText ? `<span class="history-tag tag-sabqi">\uD83D\uDCD9 Sabaq Para: ${e.sabqiText}</span>` : ''}
        ${e.manzilText ? `<span class="history-tag tag-manzil">\uD83D\uDCD8 Muraaja: ${e.manzilText}</span>` : ''}
      </div>
      <div style="display:flex;gap:0.5rem;align-items:center;font-size:0.72rem;color:var(--slate-500)">
        Tajweed:<span class="grade-badge ${gradeClass(e.tajweed)}">${e.tajweed || '-'}</span>
        Hifz:<span class="grade-badge ${gradeClass(e.retention)}">${e.retention || '-'}</span>
        ${e.homework ? `<span>\uD83D\uDCDD ${e.homework}</span>` : ''}
      </div>` : ''}
    </div>`).join('');
    } catch (err) { cont.innerHTML = '<div class="loading">Error loading history</div>'; }
}

function gradeClass(g) { if (!g) return ''; if (g >= 8) return 'grade-high'; if (g >= 5) return 'grade-mid'; return 'grade-low'; }
function gradeLabel(n) { if (n >= 9) return 'Excellent'; if (n >= 7) return 'Very Good'; if (n >= 5) return 'Good'; if (n >= 3) return 'Average'; return 'Weak'; }

async function loadStatsTab() {
    var cont = document.getElementById('profileTabContent'); if (!cont) return;
    var q = fb.query(fb.collection(db, 'entries'), fb.where('studentId', '==', window.currentStudentId));
    var snap = await fb.getDocs(q); var entries = []; snap.forEach(d => entries.push(d.data()));
    var present = entries.filter(e => !e.absent);
    var avgT = present.length ? (present.reduce((a, e) => a + (e.tajweed || 0), 0) / present.length).toFixed(1) : '\u2014';
    var avgR = present.length ? (present.reduce((a, e) => a + (e.retention || 0), 0) / present.length).toFixed(1) : '\u2014';
    cont.innerHTML = `<div class="info-grid">
    <div class="info-item"><div class="info-item-label">Total Days</div><div class="info-item-val">${entries.length}</div></div>
    <div class="info-item"><div class="info-item-label">Present</div><div class="info-item-val">${present.length}</div></div>
    <div class="info-item"><div class="info-item-label">Avg Tajweed</div><div class="info-item-val">${avgT}/10</div></div>
    <div class="info-item"><div class="info-item-label">Avg Hifz</div><div class="info-item-val">${avgR}/10</div></div>
  </div>
<div class="progress-wrap">
  <div class="info-item-label">Hifz Progress</div>
  <div class="progress-bar">
    <div class="progress-fill" style="width:${Math.min(100, (present.length / 30) * 100)}%"></div>
  </div>
  <div class="progress-text">${present.length} lessons recorded</div>
</div>`;
}

async function openEntry(id) {
    window.currentStudentId = id;
    navigate('entry', id);
    var q = fb.query(fb.collection(db, 'entries'), fb.where('studentId', '==', id), fb.where('date', '==', today()));
    var snap = await fb.getDocs(q);
    if (!snap.empty) {
        var e = snap.docs[0].data();
        setTimeout(function () {
            if (document.getElementById('sabaqSurah')) document.getElementById('sabaqSurah').value = e.sabaqSurah || '';
            if (document.getElementById('sabaqFrom')) document.getElementById('sabaqFrom').value = e.sabaqFrom || '';
            if (document.getElementById('sabaqTo')) document.getElementById('sabaqTo').value = e.sabaqTo || '';
            if (document.getElementById('sabqiText')) document.getElementById('sabqiText').value = e.sabqiText || '';
            if (document.getElementById('manzilText')) document.getElementById('manzilText').value = e.manzilText || '';
            if (document.getElementById('tajweedSlider')) document.getElementById('tajweedSlider').value = e.tajweed || 5;
            if (document.getElementById('retentionSlider')) document.getElementById('retentionSlider').value = e.retention || 5;
            if (document.getElementById('punctualitySlider')) document.getElementById('punctualitySlider').value = e.punctuality || 5;
            if (document.getElementById('disciplineSlider')) document.getElementById('disciplineSlider').value = e.discipline || 5;
            if (document.getElementById('remarkText')) document.getElementById('remarkText').value = e.remark || '';
            if (document.getElementById('homeworkText')) document.getElementById('homeworkText').value = e.homework || '';
            if (e.absent) {
                var t = document.getElementById('absentToggle');
                if (t) {
                    t.classList.add('on');
                    document.getElementById('entryForm').style.opacity = '0.4';
                    document.getElementById('entryForm').style.pointerEvents = 'none';
                }
            }
        }, 200);
    }
}

function renderEntry(id) {
    var s = window.students.find(s => s.id === id) || {};
    var opts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `<option value="${n}" ${n === 5 ? 'selected' : ''}>${n} \u2014 ${gradeLabel(n)}</option>`).join('');
    return `<div class="page-header" style="position:relative">
    <button class="back-btn" onclick="navigate('profile','${id}')"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
    <div><div class="page-header-title">${s.name || ''}</div><div style="font-size:0.65rem;color:rgba(255,255,255,0.6)">${today()}</div></div>
  </div>
  <div class="absent-toggle-bar">
    <div><div class="absent-toggle-label">Mark as Absent</div><div style="font-size:0.7rem;color:var(--slate-500)">Will send WhatsApp to parent</div></div>
    <button class="toggle" id="absentToggle" onclick="toggleAbsent(this)"></button>
  </div>
  <div id="entryForm">
    <div class="section-divider">\uD83D\uDCD7 Sabaq \u2014 New Lesson</div>
    <div class="form-section">
      <div class="form-group"><label class="form-label">Surah</label><div class="surah-select-wrap"><input class="form-input" id="sabaqSurah" placeholder="Search surah..." oninput="surahSearch(this,'sabaqDropdown')" autocomplete="off" /><div class="surah-dropdown" id="sabaqDropdown" style="display:none"></div></div></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Ayah From</label><input type="number" class="form-input" id="sabaqFrom" placeholder="1" min="1" oninput="validateAyah('sabaqFrom','sabaqTo','sabaqSurah')" /></div>
        <div class="form-group"><label class="form-label">Ayah To</label><input type="number" class="form-input" id="sabaqTo" placeholder="10" min="1" oninput="validateAyah('sabaqFrom','sabaqTo','sabaqSurah')" /></div>
      </div>
    </div>
    <div class="section-divider">\uD83D\uDCD9 Sabak Para (Sabqi / Recent Revision)</div>
    <div class="form-section"><div class="form-group"><label class="form-label">Sabaq Para Details</label><input class="form-input" id="sabqiText" placeholder="e.g. Al-Baqarah 1-40" /></div></div>
    <div class="section-divider">\uD83D\uDCD8 Muraaja (Manzil / Old Revision)</div>
    <div class="form-section"><div class="form-group"><label class="form-label">Muraaja Details</label><input class="form-input" id="manzilText" placeholder="e.g. Juz 1 full revision" /></div></div>
    <div class="section-divider">\u2B50 Grades</div>
    <div class="form-section">
      <div class="form-row">
        <div class="form-group"><label class="form-label">Tajweed Precision</label><select class="form-select" id="tajweedSlider">${opts}</select></div>
        <div class="form-group"><label class="form-label">Hifz Retention</label><select class="form-select" id="retentionSlider">${opts}</select></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Punctuality</label><select class="form-select" id="punctualitySlider">${opts}</select></div>
        <div class="form-group"><label class="form-label">Discipline</label><select class="form-select" id="disciplineSlider">${opts}</select></div>
      </div>
    </div>
    <div class="section-divider">\uD83D\uDCAC Remarks</div>
    <div class="form-section"><div class="form-group"><label class="form-label">Teacher Remarks</label><textarea class="form-textarea" id="remarkText" placeholder="Any observations, behaviour notes, progress remarks..."></textarea></div></div>
    <div class="section-divider">\uD83D\uDCDD Homework</div>
    <div class="form-section"><div class="form-group"><label class="form-label">Tomorrow's Task</label><textarea class="form-textarea" id="homeworkText" placeholder="e.g. Revise Al-Baqarah 1-50, focus on Tajweed of Mad letters"></textarea></div></div>
    <div style="padding:0 1rem 1rem"><button class="sync-btn" onclick="saveEntry('${id}')"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.18-3.36"/></svg>Sync &amp; Copy Report</button></div>
  </div>`;
}

function toggleAbsent(btn) {
    btn.classList.toggle('on');
    var isAbsent = btn.classList.contains('on');
    document.getElementById('entryForm').style.opacity = isAbsent ? '0.4' : '1';
    document.getElementById('entryForm').style.pointerEvents = isAbsent ? 'none' : 'auto';
    if (isAbsent) {
        var s = window.students.find(s => s.id === window.currentStudentId) || {};
        var phone = formatPhone(s.motherPhone || s.fatherPhone || '');
        var msg = buildAbsentMsg(s.name, today());
        showModal(`<div class="modal-title">\uD83D\uDD34 Mark as Absent?</div>
      <p style="font-size:0.85rem;color:var(--slate-500);margin-bottom:1.25rem">This will save the absence and send a WhatsApp message to the parent.</p>
      <div style="background:var(--slate-100);border-radius:var(--radius-sm);padding:0.875rem;font-size:0.78rem;color:var(--slate-700);white-space:pre-wrap;margin-bottom:1.25rem;max-height:200px;overflow-y:auto">${msg.replace(/</g, '&lt;')}</div>
      <div class="modal-actions">
        <button class="btn-outline" onclick="cancelAbsent()">Cancel</button>
        ${phone ? `<button class="btn-green" onclick="sendAbsent('${window.currentStudentId}','${phone}',this)">Save &amp; Send WA</button>` : `<button class="btn-green" onclick="saveAbsentOnly('${window.currentStudentId}')">Save Absent</button>`}
      </div>`);
    }
}

function cancelAbsent() {
    var btn = document.getElementById('absentToggle');
    if (btn) btn.classList.remove('on');
    document.getElementById('entryForm').style.opacity = '1';
    document.getElementById('entryForm').style.pointerEvents = 'auto';
    closeModal();
}

async function sendAbsent(studentId, phone, btnEl) {
    var s = window.students.find(s => s.id === studentId) || {};
    var msg = buildAbsentMsg(s.name, today());
    try {
        await fb.addDoc(fb.collection(db, 'entries'), { studentId, date: today(), absent: true, teacher: window.currentUser?.name || window.currentUser?.username, createdAt: fb.serverTimestamp() });
        await fb.updateDoc(fb.doc(db, 'students', studentId), { lastEntryDate: today(), absentToday: true });
        closeModal(); showToast('\u2705 Absent saved!');
        waOpen(phone, msg);
    } catch (e) { showToast('\u274C Error saving'); }
}

async function saveAbsentOnly(studentId) {
    try {
        await fb.addDoc(fb.collection(db, 'entries'), { studentId, date: today(), absent: true, teacher: window.currentUser?.name || window.currentUser?.username, createdAt: fb.serverTimestamp() });
        await fb.updateDoc(fb.doc(db, 'students', studentId), { lastEntryDate: today(), absentToday: true });
        closeModal(); showToast('\u2705 Absent saved');
        setTimeout(() => navigate('profile', studentId), 800);
    } catch (e) { showToast('\u274C Error saving'); }
}

function surahSearch(input, dropdownId) {
    var val = input.value.toLowerCase(); var dd = document.getElementById(dropdownId);
    if (!val) { dd.style.display = 'none'; return; }
    var matches = SURAHS.filter(s => s.name.toLowerCase().includes(val) || String(s.n).includes(val));
    if (!matches.length) { dd.style.display = 'none'; return; }
    dd.style.display = 'block';
    dd.innerHTML = matches.slice(0, 8).map(s => `<div class="surah-option" onclick="selectSurah('${s.name}',${s.ayat},'${input.id}','${dropdownId}')">${s.n}. ${s.name} (${s.ayat} ayat)</div>`).join('');
}

function selectSurah(name, ayat, inputId, ddId) {
    document.getElementById(inputId).value = name;
    document.getElementById(inputId).dataset.maxAyat = ayat;
    document.getElementById(ddId).style.display = 'none';
}

function validateAyah(fromId, toId, surahId) {
    var fromEl = document.getElementById(fromId), toEl = document.getElementById(toId), surahEl = document.getElementById(surahId);
    var from = parseInt(fromEl.value), to = parseInt(toEl.value), max = parseInt(surahEl?.dataset.maxAyat || 999);
    if (from && to && from > to) { toEl.style.borderColor = 'var(--danger)'; showToast('\u26A0\uFE0F "From" cannot be greater than "To"'); }
    else if (to && to > max) { toEl.style.borderColor = 'var(--danger)'; showToast('\u26A0\uFE0F This Surah only has ' + max + ' ayat'); }
    else { fromEl.style.borderColor = ''; toEl.style.borderColor = ''; }
}

async function saveEntry(studentId) {
    var s = window.students.find(s => s.id === studentId) || {};
    var isAbsent = document.getElementById('absentToggle')?.classList.contains('on');
    var entry = {
        studentId, date: today(), absent: isAbsent,
        sabaqSurah: document.getElementById('sabaqSurah')?.value || '',
        sabaqFrom: parseInt(document.getElementById('sabaqFrom')?.value) || null,
        sabaqTo: parseInt(document.getElementById('sabaqTo')?.value) || null,
        sabqiText: document.getElementById('sabqiText')?.value || '',
        manzilText: document.getElementById('manzilText')?.value || '',
        tajweed: parseInt(document.getElementById('tajweedSlider')?.value) || 5,
        retention: parseInt(document.getElementById('retentionSlider')?.value) || 5,
        punctuality: parseInt(document.getElementById('punctualitySlider')?.value) || 5,
        discipline: parseInt(document.getElementById('disciplineSlider')?.value) || 5,
        remark: document.getElementById('remarkText')?.value || '',
        homework: document.getElementById('homeworkText')?.value || '',
        teacher: window.currentUser?.name || window.currentUser?.username,
        reportSent: false,
        createdAt: fb.serverTimestamp()
    };
    try {
        var entryId = "entry_" + today() + "_" + studentId;
        var ref = fb.doc(db, 'entries', entryId);
        var snap = await fb.getDoc(ref);
        if (snap.exists()) {
            await fb.updateDoc(ref, entry);
        } else {
            await fb.setDoc(ref, entry);
        }
        await fb.updateDoc(fb.doc(db, 'students', studentId), { lastEntryDate: today(), absentToday: isAbsent });
        var phone = s.motherPhone || s.fatherPhone;
        var msg = isAbsent ? buildAbsentMsg(s.name, today()) : buildReportMsg(entry, s, entry.teacher, today());
        await navigator.clipboard.writeText(msg).catch(() => { });
        showToast('\u2705 Saved & Report Copied!');
        if (phone && isAbsent) { waOpen(formatPhone(phone), msg); }
        else { setTimeout(() => navigate('profile', studentId), 1000); }
    } catch (e) { showToast('\u274C Error saving. Check connection.'); console.error(e); }
}

function renderEnroll() {
    return `<div class="tab-bar" style="margin-top:10px">
    <button class="tab active" onclick="switchEnrollTab(this,'manual')">\u270D\uFE0F Manual</button>
    <button class="tab" onclick="switchEnrollTab(this,'import')">\uD83D\uDCC2 Import CSV</button>
  </div>
  <div id="enrollTabContent">${renderEnrollForm()}</div>`;
}

function switchEnrollTab(el, tab) {
    document.querySelectorAll('.tab-bar .tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('enrollTabContent').innerHTML = tab === 'manual' ? renderEnrollForm() : renderImport();
}

function renderEnrollForm(s) {
    return `<div class="form-section">
    <div class="section-divider">\uD83D\uDC64 Student Info</div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Roll No *</label><input class="form-input" id="eRoll" value="${s?.rollNo || ''}" placeholder="001" /></div>
      <div class="form-group"><label class="form-label">Starting Juz</label><input type="number" class="form-input" id="eJuz" value="${s?.startingJuz || ''}" placeholder="1" min="1" max="30" /></div>
    </div>
    <div class="form-group"><label class="form-label">Full Name *</label><input class="form-input" id="eName" value="${s?.name || ''}" placeholder="Student Full Name" /></div>
    <div class="form-group">
      <label class="form-label">Gender</label>
      <select class="form-select" id="eGender">
        <option value="">Select Gender</option>
        <option value="male" ${s?.gender === 'male' ? 'selected' : ''}>Male</option>
        <option value="female" ${s?.gender === 'female' ? 'selected' : ''}>Female</option>
      </select>
    </div>
    <div class="form-group"><label class="form-label">Class</label><input class="form-input" id="eClass" value="${s?.class || ''}" placeholder="e.g. Juz 1-5 or Class A" /></div>
    <div class="form-group"><label class="form-label">Teacher Notes</label><textarea class="form-textarea" id="eNotes" style="min-height:60px" placeholder="Any special notes...">${s?.notes || ''}</textarea></div>
    <div class="section-divider">\uD83D\uDC69 Mother's Info</div>
    <div class="form-group"><label class="form-label">Mother's Name</label><input class="form-input" id="eMomName" value="${s?.motherName || ''}" placeholder="Full Name" /></div>
    <div class="form-group"><label class="form-label">Mother's Phone</label><input class="form-input" id="eMomPhone" value="${s?.motherPhone || ''}" placeholder="+91 XXXXX XXXXX" type="tel" /></div>
    <div class="section-divider">\uD83D\uDC68 Father's Info</div>
    <div class="form-group"><label class="form-label">Father's Name</label><input class="form-input" id="eDadName" value="${s?.fatherName || ''}" placeholder="Full Name" /></div>
    <div class="form-group"><label class="form-label">Father's Phone</label><input class="form-input" id="eDadPhone" value="${s?.fatherPhone || ''}" placeholder="+91 XXXXX XXXXX" type="tel" /></div>
    <button class="btn-primary" onclick="saveStudent('${s?.id || ''}')">${s?.id ? '\uD83D\uDCBE Update Student' : '\u2705 Enroll Student'}</button>
  </div>`;
}

function renderImport() {
    return `<div class="form-section">
    <div style="background:var(--emerald-ultra);border-radius:var(--radius-sm);padding:1rem;margin-bottom:1rem;font-size:0.8rem;color:var(--emerald);line-height:1.6"><strong>CSV Format:</strong><br>rollNo, name, class, motherName, motherPhone, fatherName, fatherPhone, startingJuz</div>
    <button class="btn-sm" style="width:100%;padding:0.75rem;margin-bottom:0.75rem" onclick="downloadTemplate()">\u2B07\uFE0F Download CSV Template</button>
    <div class="import-zone" onclick="document.getElementById('csvFile').click()">
      <svg width="32" height="32" fill="none" stroke="var(--slate-300)" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
      <div class="import-zone-text">Tap to select CSV file</div>
    </div>
    <input type="file" id="csvFile" accept=".csv" style="display:none" onchange="importCSV(this)" />
  </div>`;
}

async function saveStudent(existingId) {
    var roll = document.getElementById('eRoll')?.value.trim();
    var name = document.getElementById('eName')?.value.trim();
    if (!roll || !name) { showToast('\u26A0\uFE0F Roll No and Name are required'); return; }
    var data = { rollNo: roll, name, class: document.getElementById('eClass')?.value.trim() || '', startingJuz: document.getElementById('eJuz')?.value || '', gender: document.getElementById('eGender')?.value || '', motherName: document.getElementById('eMomName')?.value.trim() || '', motherPhone: document.getElementById('eMomPhone')?.value.trim() || '', fatherName: document.getElementById('eDadName')?.value.trim() || '', fatherPhone: document.getElementById('eDadPhone')?.value.trim() || '', notes: document.getElementById('eNotes')?.value.trim() || '', archived: false, updatedAt: fb.serverTimestamp() };
    try {
        if (existingId) { await fb.updateDoc(fb.doc(db, 'students', existingId), data); showToast('\u2705 Student updated!'); }
        else { data.createdAt = fb.serverTimestamp(); await fb.addDoc(fb.collection(db, 'students'), data); showToast('\u2705 Student enrolled!'); }
        setTimeout(() => navigate('students'), 800);
    } catch (e) { showToast('\u274C Error saving student'); console.error(e); }
}

function editStudent(id) { var s = window.students.find(s => s.id === id); if (!s) return; navigate('enroll'); setTimeout(() => { const cont = document.getElementById('enrollTabContent'); if (cont) cont.innerHTML = renderEnrollForm({ ...s, id }); }, 100); }
async function archiveStudent(id, isArchived) { try { await fb.updateDoc(fb.doc(db, 'students', id), { archived: !isArchived }); showToast(isArchived ? '\u2705 Student restored' : '\uD83D\uDDC3\uFE0F Student archived'); navigate('students'); } catch (e) { showToast('\u274C Error'); } }

function downloadTemplate() { var csv = 'rollNo,name,class,motherName,motherPhone,fatherName,fatherPhone,startingJuz\n001,Student Name,Class A,Mother Name,+91XXXXXXXXXX,Father Name,+91XXXXXXXXXX,1'; var blob = new Blob([csv], { type: 'text/csv' }); var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'jsi-students-template.csv'; a.click(); }

async function importCSV(input) {
    var file = input.files[0]; if (!file) return;
    var text = await file.text(); var lines = text.trim().split('\n'); var headers = lines[0].split(',').map(h => h.trim()); var count = 0;
    for (var i = 1; i < lines.length; i++) {
        var vals = lines[i].split(',').map(v => v.trim()); var row = {}; headers.forEach((h, j) => row[h] = vals[j] || ''); if (!row.name || !row.rollNo) continue; try {
            await fb.addDoc(fb.collection(db, 'students'), { rollNo: row.rollNo, name: row.name, class: row.class || '', motherName: row.motherName || '', motherPhone: row.motherPhone || '', fatherName: row.fatherName || '', fatherPhone: row.fatherPhone || '', startingJuz: row.startingJuz || '', archived: false, createdAt: fb.serverTimestamp() });
            count++;
        } catch (e) { console.error(e); }
    }
    showToast('\u2705 Imported ' + count + ' students'); setTimeout(() => navigate('students'), 1000);
}

function renderReports() {
    return `<div class="section-title">Select Report Type</div>
  <div class="report-type-grid">
    <div class="report-type-card" onclick="selectReportType(this,'daily')"><div class="report-type-icon">\uD83D\uDCC5</div><div class="report-type-name">Daily</div><div class="report-type-desc">Today's entries</div></div>
    <div class="report-type-card" onclick="selectReportType(this,'weekly')"><div class="report-type-icon">\uD83D\uDCCA</div><div class="report-type-name">Weekly</div><div class="report-type-desc">Last 7 days</div></div>
    <div class="report-type-card" onclick="selectReportType(this,'monthly')"><div class="report-type-icon">\uD83D\uDCC8</div><div class="report-type-name">Monthly</div><div class="report-type-desc">Current month</div></div>
    <div class="report-type-card" onclick="selectReportType(this,'custom')"><div class="report-type-icon">\uD83D\uDDD3\uFE0F</div><div class="report-type-name">Custom</div><div class="report-type-desc">Pick date range</div></div>
  </div>
  <div id="reportOptions" style="display:none;padding:0 1rem">
    <div id="customDateRange" style="display:none">
      <div class="form-row" style="margin-bottom:0.75rem">
        <div class="form-group"><label class="form-label">From</label><input type="date" class="form-input" id="reportFrom" /></div>
        <div class="form-group"><label class="form-label">To</label><input type="date" class="form-input" id="reportTo" /></div>
      </div>
    </div>
    <div class="form-group"><label class="form-label">Student (leave empty for all)</label>
      <select class="form-select" id="reportStudent">
        <option value="">All Students</option>
        ${window.students.filter(s => !s.archived).map(s => `<option value="${s.id}">${s.name} (Roll ${s.rollNo})</option>`).join('')}
      </select>
    </div>
    <button class="btn-primary" onclick="generateReport()">\uD83D\uDCC4 Generate Report</button>
  </div>`;
}

window.selectedReportType = '';
function selectReportType(el, type) { 
    document.querySelectorAll('.report-type-card').forEach(c => c.classList.remove('selected')); 
    el.classList.add('selected'); 
    window.selectedReportType = type; 
    document.getElementById('reportOptions').style.display = 'block'; 
    document.getElementById('customDateRange').style.display = type === 'custom' ? 'block' : 'none'; 
}

async function generateReport() {
    var studentId = document.getElementById('reportStudent')?.value; var fromDate, toDate; var t = today();
    if (window.selectedReportType === 'daily') { fromDate = t; toDate = t; }
    else if (window.selectedReportType === 'weekly') { var d = new Date(); d.setDate(d.getDate() - 6); fromDate = d.toISOString().split('T')[0]; toDate = t; }
    else if (window.selectedReportType === 'monthly') { var d = new Date(); d.setDate(1); fromDate = d.toISOString().split('T')[0]; toDate = t; }
    else { fromDate = document.getElementById('reportFrom')?.value; toDate = document.getElementById('reportTo')?.value; if (!fromDate || !toDate) { showToast('\u26A0\uFE0F Select date range'); return; } }
    showToast('\u23F3 Generating report...');
    var params = new URLSearchParams({ type: window.selectedReportType, from: fromDate, to: toDate, student: studentId || '' });
    window.open('/hifz-report/?' + params.toString(), '_blank');
}


function renderAdmin() {
    var canManage = ['owner', 'admin', 'management'].includes(window.currentUser?.role);
    if (!canManage) return '<div class="empty-state"><div class="empty-state-icon">\uD83D\uDD12</div><div class="empty-state-text">Access restricted</div></div>';
    
    return `<div class="dashboard-header">
        <div class="dash-name">Admin Console</div>
        <div class="dash-date">Manage your school infrastructure</div>
    </div>
    <div class="report-type-grid">
        <div class="report-type-card" onclick="navigate('users')">
            <div class="report-type-icon">\uD83D\uDC65</div>
            <div class="report-type-name">User Accounts</div>
            <div class="report-type-desc">Manage Staff & Parents</div>
        </div>
        <div class="report-type-card" onclick="navigate('reports')">
            <div class="report-type-icon">\uD83D\uDCC8</div>
            <div class="report-type-name">System Reports</div>
            <div class="report-type-desc">Overall Statistics</div>
        </div>
    </div>
    <div class="section-title">Teachers & Staff</div>
    <div id="userList"><div class="loading"><div class="spinner"></div> Loading...</div></div>
    <div style="padding:1rem"><button class="btn-primary" onclick="showAddAccountModal('teacher')">+ Add Staff Member</button></div>`;
}

async function loadAdminUsers() {
    const cont = document.getElementById('userList');
    if (!cont) return;
    try {
        const snap = await fb.getDocs(fb.collection(db, 'users'));
        const users = [];
        snap.forEach(d => users.push({ id: d.id, ...d.data() }));
        const staff = users.filter(u => u.role !== 'parent').slice(0, 5);
        if (staff.length === 0) {
            cont.innerHTML = '<div class="empty-state-text" style="padding:1rem;font-size:0.8rem">No staff records found.</div>';
            return;
        }
        cont.innerHTML = staff.map(u => `
            <div class="student-item" style="padding: 0.75rem 1rem;">
                <div class="avatar" style="width:32px;height:32px;font-size:0.8rem">${u.name.charAt(0)}</div>
                <div class="student-info">
                    <div class="student-name" style="font-size:0.85rem">${u.name} <span class="history-tag" style="font-size:0.6rem;padding:1px 6px">${u.role}</span></div>
                    <div class="student-meta" style="font-size:0.75rem">${u.email || 'No email set'}</div>
                </div>
            </div>
        `).join('');
    } catch (e) {
        console.error(e);
        cont.innerHTML = '<div class="empty-state-text">Error loading staff.</div>';
    }
}

function renderUserManagement() {
    return `<div class="page-header">
        <button class="back-btn" onclick="navigate('admin')"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
        <div class="page-header-title">User Management</div>
    </div>
    <div class="tab-bar" style="margin-top:10px">
        <button class="tab active" onclick="switchUserTab(this,'staff')">Staff</button>
        <button class="tab" onclick="switchUserTab(this,'parents')">Parents</button>
    </div>
    <div id="userTableContainer" style="padding: 1rem;">
        <div class="loading"><div class="spinner"></div> Loading Users...</div>
    </div>
    <div style="padding: 1rem; display: flex; gap: 0.75rem;">
        <button class="btn-primary" onclick="showAddAccountModal('teacher')">Add Teacher</button>
        <button class="btn-primary" style="background: var(--slate-900)" onclick="showAddAccountModal('parent')">Add Parent</button>
    </div>`;
}

async function loadUsers() {
    const cont = document.getElementById('userTableContainer');
    if (!cont) return;
    try {
        const snap = await fb.getDocs(fb.collection(db, 'users'));
        const users = [];
        snap.forEach(d => users.push({ id: d.id, ...d.data() }));
        
        cont.innerHTML = `<table style="width: 100%; border-collapse: collapse; font-size: 0.8rem;">
            <thead>
                <tr style="text-align: left; border-bottom: 2px solid var(--slate-200); color: var(--slate-500);">
                    <th style="padding: 0.5rem;">Name</th>
                    <th style="padding: 0.5rem;">Role</th>
                    <th style="padding: 0.5rem;">Status</th>
                    <th style="padding: 0.5rem;">Actions</th>
                </tr>
            </thead>
            <tbody>
                ${users.map(u => `
                    <tr style="border-bottom: 1px solid var(--slate-100);">
                        <td style="padding: 0.75rem 0.5rem;">
                            <div style="font-weight: 700;">${u.name}</div>
                            <div style="font-size: 0.7rem; color: var(--slate-500);">${u.email}</div>
                        </td>
                        <td style="padding: 0.5rem;"><span class="history-tag" style="background: var(--slate-100);">${u.role}</span></td>
                        <td style="padding: 0.5rem;">${u.approved ? '✅' : '❌'}</td>
                        <td style="padding: 0.5rem;">
                            <button class="btn-sm" style="padding: 4px 8px;" onclick="toggleUserStatus('${u.id}', ${u.approved})">${u.approved ? 'Disable' : 'Enable'}</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>`;
    } catch (e) {
        cont.innerHTML = "Error loading users.";
        console.error(e);
    }
}

async function toggleUserStatus(uid, currentStatus) {
    try {
        await fb.updateDoc(fb.doc(db, 'users', uid), { approved: !currentStatus });
        showToast("User status updated");
        loadUsers();
    } catch (e) { showToast("Error updating status"); }
}

function showAddAccountModal(role) {
    const isParent = role === 'parent';
    showModal(`
        <div class="modal-title">Create ${role.charAt(0).toUpperCase() + role.slice(1)} Account</div>
        <div class="form-group">
            <label class="form-label">Full Name</label>
            <input class="form-input" id="accName" placeholder="Full Name" />
        </div>
        <div class="form-group">
            <label class="form-label">Email Address</label>
            <input class="form-input" id="accEmail" type="email" placeholder="email@school.com" />
        </div>
        <div class="form-group">
            <label class="form-label">Password</label>
            <input class="form-input" id="accPass" type="password" placeholder="Min 6 characters" />
        </div>
        ${isParent ? `
            <div class="form-group">
                <label class="form-label">Student Name</label>
                <input class="form-input" id="accStudent" placeholder="Child's Name" />
            </div>
        ` : `
            <div class="form-group">
                <label class="form-label">Assigned Classes</label>
                <input class="form-input" id="accClasses" placeholder="e.g. Grade 1, Grade 2" />
            </div>
        `}
        <div class="modal-actions">
            <button class="btn-outline" onclick="closeModal()">Cancel</button>
            <button class="btn-green" id="createAccBtn" onclick="createNewUserAccount('${role}')">Create Account</button>
        </div>
        <div id="createAccError" style="color: var(--danger); font-size: 0.75rem; margin-top: 0.5rem; text-align: center;"></div>
    `);
}

/** 
 * IMPORTANT: To create users without logging out the admin, 
 * we use a secondary Firebase app instance.
 */
async function createNewUserAccount(role) {
    const name = document.getElementById('accName').value.trim();
    const email = document.getElementById('accEmail').value.trim();
    const password = document.getElementById('accPass').value.trim();
    const errorEl = document.getElementById('createAccError');
    const btn = document.getElementById('createAccBtn');

    if (!name || !email || !password || password.length < 6) {
        errorEl.textContent = "Please fill all fields. Password must be 6+ chars.";
        return;
    }

    btn.disabled = true;
    btn.textContent = "Creating...";

    try {
        // We use the existing auth to create but we must be careful.
        // In client SDK, createUser logs in the new user.
        // AS A SENIOR DEV, I recommend using a Firebase Cloud Function for this for production.
        // FOR LOCAL/DEMO: I'll show you the 'secondary app' trick.
        
        const tempApp = initializeApp(window._auth.app.options, "SecondaryApp");
        const tempAuth = getAuth(tempApp);
        const { createUserWithEmailAndPassword } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
        
        const userCredential = await createUserWithEmailAndPassword(tempAuth, email, password);
        const uid = userCredential.user.uid;

        const userData = {
            name,
            email,
            role,
            approved: true,
            createdBy: window.currentUser.uid,
            createdAt: fb.serverTimestamp()
        };

        if (role === 'parent') userData.studentName = document.getElementById('accStudent').value.trim();
        else userData.assignedClasses = document.getElementById('accClasses').value.trim();

        await fb.setDoc(fb.doc(db, 'users', uid), userData);
        
        signOut(tempAuth);
        deleteApp(tempApp);

        showToast("Account created successfully!");
        closeModal();
        loadUsers();
    } catch (e) {
        console.error(e);
        errorEl.textContent = e.message;
        btn.disabled = false;
        btn.textContent = "Create Account";
    }
}

function showAddUser() { showModal(`<div class="modal-title">Add Staff Member</div><div class="form-group"><label class="form-label">Full Name</label><input class="form-input" id="newName" placeholder="Full Name" /></div><div class="form-group"><label class="form-label">Username</label><input class="form-input" id="newUsername" placeholder="username" autocapitalize="none" /></div><div class="form-group"><label class="form-label">4-Digit PIN</label><input class="form-input" id="newPin" placeholder="1234" maxlength="4" type="number" /></div><div class="form-group"><label class="form-label">Role</label><select class="form-select" id="newRole"><option value="teacher">Teacher</option><option value="management">Management</option></select></div><div class="modal-actions"><button class="btn-outline" onclick="closeModal()">Cancel</button><button class="btn-green" onclick="createUser()">Create</button></div>`); }

function editUser(id, name, username, role) { showModal(`<div class="modal-title">Edit Staff Member</div><div class="form-group"><label class="form-label">Full Name</label><input class="form-input" id="editName" value="${name}" /></div><div class="form-group"><label class="form-label">New PIN (leave blank to keep)</label><input class="form-input" id="editPin" placeholder="New 4-digit PIN" maxlength="4" type="number" /></div><div class="form-group"><label class="form-label">Role</label><select class="form-select" id="editRole"><option value="teacher" ${role === 'teacher' ? 'selected' : ''}>Teacher</option><option value="management" ${role === 'management' ? 'selected' : ''}>Management</option></select></div><div class="modal-actions"><button class="btn-outline" onclick="closeModal()">Cancel</button><button class="btn-green" onclick="updateUser('${id}','${username}')">Save</button></div>`); }

async function updateUser(id, username) {
    var name = document.getElementById('editName')?.value.trim(); var pin = document.getElementById('editPin')?.value.trim(); var role = document.getElementById('editRole')?.value;
    if (!name) { showToast('Name required'); return; } if (pin && pin.length !== 4) { showToast('PIN must be 4 digits'); return; }
    var data = { name, role, updatedAt: fb.serverTimestamp() }; if (pin) data.pin = pin;
    try { await fb.updateDoc(fb.doc(db, 'users', id), data); showToast('\u2705 Updated'); closeModal(); loadAdminUsers(); } catch (e) { showToast('\u274C Error'); }
}

async function createUser() {
    var name = document.getElementById('newName')?.value.trim(); var username = document.getElementById('newUsername')?.value.trim().toLowerCase(); var pin = document.getElementById('newPin')?.value.trim(); var role = document.getElementById('newRole')?.value;
    if (!name || !username || !pin || pin.length !== 4) { showToast('\u26A0\uFE0F All fields required, PIN must be 4 digits'); return; }
    try { await fb.setDoc(fb.doc(db, 'users', username), { name, username, pin, role, createdAt: fb.serverTimestamp() }); showToast('\u2705 Staff added'); closeModal(); loadAdminUsers(); } catch (e) { showToast('\u274C Error'); }
}

async function deleteUser(id, username) {
    if (!confirm('Delete user "' + username + '"?')) return;
    await fb.deleteDoc(fb.doc(db, 'users', id));
    showToast('\uD83D\uDDD1\uFE0F Deleted');
    loadAdminUsers();
}

async function confirmDeleteStudent(id, name) {
    var step1 = confirm("Delete student '" + name + "' ?");
    if (!step1) return;
    var step2 = prompt("Type DELETE to confirm permanent deletion");
    if (step2 !== "DELETE") { showToast("Deletion cancelled"); return; }
    try {
        await fb.deleteDoc(fb.doc(db, 'students', id));
        showToast("&#x1f5d1; Student deleted");
        navigate('students');
    } catch (e) { showToast("&#x274c; Error deleting"); }
}

async function sendReport(studentId) {
    var s = window.students.find(st => st.id === studentId);
    var phone = formatPhone(s.motherPhone || s.fatherPhone);
    var q = fb.query(fb.collection(db, 'entries'), fb.where('studentId', '==', studentId), fb.where('date', '==', today()));
    var snap = await fb.getDocs(q);
    if (snap.empty) return;
    var e = snap.docs[0].data();
    var msg = buildReportMsg(e, s, window.currentUser?.name || window.currentUser?.username, today());
    await fb.updateDoc(snap.docs[0].ref, { reportSent: true });
    closeModal();
    waOpen(phone, msg);
}

async function loadStudentStatuses() {
    var q = fb.query(fb.collection(db, 'entries'), fb.where('date', '==', today()));
    var snap = await fb.getDocs(q);
    var map = {};
    snap.forEach(function (d) { var e = d.data(); map[e.studentId] = e; });
    window.students.forEach(function (s) {
        var el = document.getElementById('status-' + s.id);
        if (!el) return;
        var e = map[s.id];
        if (!e) {
            var now = new Date(); var hour = now.getHours();
            if (hour >= 9) {
                el.innerHTML = '&#x26a0; No Entry';
                el.style.background = '#fecaca'; el.style.color = '#991b1b';
                el.style.padding = '2px 6px'; el.style.borderRadius = '999px';
            } else { el.innerHTML = ''; }
            return;
        }
        if (e.absent) {
            el.innerHTML = 'Absent';
            el.style.background = '#fee2e2'; el.style.color = '#b91c1c';
            el.style.padding = '2px 6px'; el.style.borderRadius = '999px';
        }
        else if (e.reportSent) {
            el.innerHTML = 'Report Sent';
            el.style.background = '#dcfce7'; el.style.color = '#15803d';
            el.style.padding = '2px 6px'; el.style.borderRadius = '999px';
        }
        else {
            el.innerHTML = 'Report Pending';
            el.style.background = '#fef3c7'; el.style.color = '#92400e';
            el.style.padding = '2px 6px'; el.style.borderRadius = '999px';
        }
    });
}

function filterStatus(type, btn) {
    document.querySelectorAll('#statusFilters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    var list = document.querySelectorAll('.student-item');
    list.forEach(function (item) {
        var status = item.querySelector('[id^="status-"]');
        if (!status) { item.style.display = ''; return; }
        var text = status.innerText.toLowerCase();
        if (type === 'all') { item.style.display = ''; }
        else if (type === 'noentry') { item.style.display = text.includes('no entry') ? '' : 'none'; }
        else if (type === 'absent') { item.style.display = text.includes('absent') ? '' : 'none'; }
        else if (type === 'pending') { item.style.display = text.includes('pending') ? '' : 'none'; }
        else if (type === 'sent') { item.style.display = text.includes('sent') ? '' : 'none'; }
    });
}

function callParent(phone) { window.location.href = 'tel:' + phone; }

async function waParent(studentId) {
    var s = window.students.find(s => s.id === studentId);
    var phone = formatPhone(s?.motherPhone || s?.fatherPhone || '');
    if (!phone) { showToast('No phone number available'); return; }
    var q = fb.query(fb.collection(db, 'entries'), fb.where('studentId', '==', studentId), fb.where('date', '==', today()));
    var snap = await fb.getDocs(q);
    var msg = snap.empty ? buildNoEntryMsg(s.name) : buildReportMsg(snap.docs[0].data(), s, window.currentUser?.name || window.currentUser?.username, today());
    if (!snap.empty) { await fb.updateDoc(snap.docs[0].ref, { reportSent: true }); }
    waOpen(phone, msg);
}

function waParentFather(phone, name) { waOpen(formatPhone(phone), buildNoEntryMsg(name)); }

function showModal(html) { document.getElementById('modalContent').innerHTML = html; document.getElementById('modalOverlay').classList.add('open'); }
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }

var toastTimer;
function showToast(msg) { var t = document.getElementById('toast'); if(!t) return; t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2500); }

async function loadPendingReports() {
    var q = fb.query(fb.collection(db, 'entries'), fb.where('date', '==', today()));
    var snap = await fb.getDocs(q);
    var pending = [];
    snap.forEach(function (d) {
        var e = d.data();
        if (!e.absent && e.reportSent === false) {
            var s = window.students.find(st => st.id === e.studentId);
            if (s) { pending.push({ entry: e, student: s, ref: d.ref }); }
        }
    });
    var container = document.getElementById('pendingReports'); if (!container) return;
    if (pending.length === 0) { container.innerHTML = `<div class="empty-state"><div class="empty-state-text">All reports sent today</div></div>`; return; }
    container.innerHTML = pending.map(p => `
    <div class="student-item">
      <div class="student-item-top">
        <div class="avatar">${p.student.name.charAt(0)}</div>
        <div class="student-info">
          <div class="student-name">${p.student.name}</div>
          <div class="student-meta">Report Pending</div>
        </div>
      </div>
      <div class="student-item-actions">
        <button class="quick-btn entry" onclick="openEntry('${p.student.id}')">Update Entry</button>
        <button class="quick-btn wa" onclick="previewReport('${p.student.id}')">Send Report</button>
      </div>
    </div>`).join('');
}

function loadClassAttention() {
    var container = document.getElementById('classAttention'); if (!container) return;
    var now = new Date(); if (now.getHours() < 9) { container.innerHTML = ''; return; }
    var map = {};
    window.students.forEach(function (s) {
        if (s.archived) return;
        if (s.lastEntryDate !== today()) {
            var cls = s.class || 'No Class';
            if (!map[cls]) map[cls] = 0;
            map[cls]++;
        }
    });
    var keys = Object.keys(map);
    if (keys.length === 0) { container.innerHTML = '<div class="empty-state"><div class="empty-state-text">All classes updated</div></div>'; return; }
    container.innerHTML = keys.map(function (c) {
        return '<div class="student-item">' +
            '<div class="student-item-top">' +
            '<div class="avatar">&#x26a0;</div>' +
            '<div class="student-info">' +
            '<div class="student-name">' + c + '</div>' +
            '<div class="student-meta">' + map[c] + ' students pending entry</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }).join('');
}

async function previewReport(studentId) {
    var s = window.students.find(st => st.id === studentId);
    var q = fb.query(fb.collection(db, 'entries'), fb.where('studentId', '==', studentId), fb.where('date', '==', today()));
    var snap = await fb.getDocs(q);
    if (snap.empty) return;
    var e = snap.docs[0].data();
    var msg = buildReportMsg(e, s, window.currentUser?.name || window.currentUser?.username, today());
    showModal(`
    <div class="modal-title">Preview Report</div>
    <div style="background:var(--slate-100);padding:1rem;border-radius:var(--radius-sm);white-space:pre-wrap;font-size:0.8rem;margin-bottom:1rem">${msg}</div>
    <div class="modal-actions">
      <button class="btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn-green" onclick="sendReport('${studentId}')">Send</button>
    </div>`);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) overlay.addEventListener('click', function (e) { if (e.target === this) closeModal(); });

    document.addEventListener('click', function (e) {
        if (!e.target.classList.contains('form-input')) {
            document.querySelectorAll('.surah-dropdown').forEach(d => d.style.display = 'none');
        }
    });

    waitForFirebase(() => {
        // Auth is handled by onAuthStateChanged in auth.js
    });

    document.querySelectorAll('.pin-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (window.pinPress) window.pinPress(this.getAttribute('data-pin'));
        });
    });

    const signInBtn = document.getElementById('signInBtn');
    if (signInBtn) signInBtn.addEventListener('click', () => { if (window.doLogin) window.doLogin(); });
});

// Attach functions to window for onclick handlers in HTML
window.loadStudents = loadStudents;
window.navigate = navigate;
window.renderAppView = renderAppView;
window.switchStudentView = switchStudentView;
window.filterStudents = filterStudents;
window.filterByClass = filterByClass;
window.openProfile = openProfile;
window.switchProfileTab = switchProfileTab;
window.loadProfileData = loadProfileData;
window.loadHistoryTab = loadHistoryTab;
window.loadStatsTab = loadStatsTab;
window.openEntry = openEntry;
window.toggleAbsent = toggleAbsent;
window.cancelAbsent = cancelAbsent;
window.sendAbsent = sendAbsent;
window.saveAbsentOnly = saveAbsentOnly;
window.surahSearch = surahSearch;
window.selectSurah = selectSurah;
window.validateAyah = validateAyah;
window.saveEntry = saveEntry;
window.switchEnrollTab = switchEnrollTab;
window.saveStudent = saveStudent;
window.editStudent = editStudent;
window.archiveStudent = archiveStudent;
window.downloadTemplate = downloadTemplate;
window.importCSV = importCSV;
window.selectReportType = selectReportType;
window.generateReport = generateReport;
window.editUser = editUser;
window.updateUser = updateUser;
window.createUser = createUser;
window.deleteUser = deleteUser;
window.confirmDeleteStudent = confirmDeleteStudent;
window.sendReport = sendReport;
window.loadStudentStatuses = loadStudentStatuses;
window.filterStatus = filterStatus;
window.callParent = callParent;
window.waParent = waParent;
window.waParentFather = waParentFather;
window.showModal = showModal;
window.closeModal = closeModal;
window.showToast = showToast;
window.previewReport = previewReport;
window.loadUsers = loadUsers;
window.toggleUserStatus = toggleUserStatus;
window.showAddAccountModal = showAddAccountModal;
window.createNewUserAccount = createNewUserAccount;
