const modalBackdrop = document.getElementById('modalBackdrop');
const loginPanel = document.getElementById('loginPanel');
const signupPanel = document.getElementById('signupPanel');
const toast = document.getElementById('toast');
const dashboardOverlay = document.getElementById('dashboardOverlay');

function getUsers(){ return JSON.parse(localStorage.getItem('memberspace_users') || '[]'); }
function saveUsers(users){ localStorage.setItem('memberspace_users', JSON.stringify(users)); }
function getCurrentUser(){ return JSON.parse(localStorage.getItem('memberspace_current_user') || 'null'); }
function setCurrentUser(user){ localStorage.setItem('memberspace_current_user', JSON.stringify(user)); }
function clearCurrentUser(){ localStorage.removeItem('memberspace_current_user'); }

function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function showPanel(type){
  loginPanel.classList.toggle('hidden', type !== 'login');
  signupPanel.classList.toggle('hidden', type !== 'signup');
}

function openModal(type){
  showPanel(type);
  modalBackdrop.classList.add('active');
  modalBackdrop.setAttribute('aria-hidden', 'false');
}
function closeModal(){
  modalBackdrop.classList.remove('active');
  modalBackdrop.setAttribute('aria-hidden', 'true');
}

function showDashboard(user){
  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profileInitial').textContent = user.name.charAt(0).toUpperCase();
  dashboardOverlay.classList.add('active');
}

function updateNav(){
  const user = getCurrentUser();
  const nav = document.getElementById('navArea');
  if(user){
    nav.innerHTML = `
      <a href="#features">기능</a><a href="#about">소개</a>
      <button class="btn btn-ghost" id="myPageBtn">${escapeHtml(user.name)} 님</button>
      <button class="btn btn-primary" id="headerLogoutBtn">로그아웃</button>`;
    document.getElementById('myPageBtn').onclick = () => showDashboard(user);
    document.getElementById('headerLogoutBtn').onclick = logout;
  }else{
    nav.innerHTML = `
      <a href="#features">기능</a><a href="#about">소개</a>
      <button class="btn btn-ghost" data-open="login">로그인</button>
      <button class="btn btn-primary" data-open="signup">회원가입</button>`;
    attachOpenEvents();
  }
}

function escapeHtml(value){
  return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function attachOpenEvents(){
  document.querySelectorAll('[data-open]').forEach(btn => {
    btn.onclick = () => openModal(btn.dataset.open);
  });
}

function logout(){
  clearCurrentUser();
  dashboardOverlay.classList.remove('active');
  updateNav();
  showToast('로그아웃되었습니다.');
}

attachOpenEvents();
document.getElementById('modalClose').onclick = closeModal;
modalBackdrop.addEventListener('click', e => { if(e.target === modalBackdrop) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
document.querySelectorAll('[data-switch]').forEach(btn => btn.onclick = () => showPanel(btn.dataset.switch));

document.getElementById('signupForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const password = document.getElementById('signupPassword').value;
  const passwordConfirm = document.getElementById('signupPasswordConfirm').value;

  if(password !== passwordConfirm){ showToast('비밀번호가 일치하지 않습니다.'); return; }
  const users = getUsers();
  if(users.some(u => u.email === email)){ showToast('이미 가입된 이메일입니다.'); return; }

  const user = { id: Date.now(), name, email, password };
  users.push(user);
  saveUsers(users);
  setCurrentUser({ id:user.id, name:user.name, email:user.email });
  closeModal();
  e.target.reset();
  updateNav();
  showToast('회원가입이 완료되었습니다.');
  showDashboard({ name:user.name, email:user.email });
});

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const user = getUsers().find(u => u.email === email && u.password === password);
  if(!user){ showToast('이메일 또는 비밀번호를 확인해주세요.'); return; }

  setCurrentUser({ id:user.id, name:user.name, email:user.email });
  closeModal();
  e.target.reset();
  updateNav();
  showToast('로그인되었습니다.');
  showDashboard(user);
});

document.getElementById('logoutBtn').onclick = logout;
document.getElementById('backHomeBtn').onclick = () => dashboardOverlay.classList.remove('active');

updateNav();
