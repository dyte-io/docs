const template = document.createElement('template');

const ctaLink =
  'https://www.producthunt.com/products/live-video-calling-sdk-by-dyte';

template.innerHTML = `
    <style>
        :host {
            display: block;
            container-type: inline-size;
            container-name: ph-banner;
        }

        .banner {
            display: inline-block;
            height: 48px;
            width: 100%;
            background: #F75B34;
            align-items: center;
            text-align: center;
            line-height: 48px;
        }

        .banner-image {
            display: inline-flex;
            align-items: center;
        }

        .banner-content {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 14px;
        }

        .banner-text {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: 500;
        }

        .banner-primary-text {
            padding-left: 12px;
        }

        .banner-text span {
            font-weight: bold;
        }

        .banner-cta-container {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
        }

        .banner-cta {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 6px 12px;
            gap: 4px;
            background: #FFFFFF;
            border-radius: 4px;
            height: 24px;
            color: #F75B34;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            font-style: normal;
            font-weight: bold;
        }

        .close-banner {
            text-decoration: none;
            cursor: pointer;
            margin: 0 12px;
            float: right;
            height: 48px;
        }

        .close-banner .banner-content {
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
        }

        @container (max-width: 768px) {
            .banner-image {
                display: none;
            }
        }

        @container (max-width: 768px) {
            .banner {
                height: auto;
            }

            .banner-image {
                display: none;
            }

            .banner-content {
                flex-direction: column;
                align-items: center;
            }

            .banner-primary-text {
                padding-left: 0;
            }

            .banner-cta-container {
                display: inline-flex;
                flex-direction: row-reverse;
                padding-left: 8px;
                justify-content: space-between;
            }

            .close-banner {
                line-height: 48px;
            }

            .close-banner .banner-content {
                justify-content: center;
            }
        }

        @container (max-width: 375px) {
            .banner {
                height: auto;
            }

            .banner-image {
                display: none;
            }

            .banner-content {
                flex-direction: column;
                align-items: center;
                font-size: 15px;
            }

            .banner-text {
                font-size: 15px;
            }

            .banner-primary-text {
                padding-left: 0;
            }

            .banner-cta-container {
                display: inline-flex;
                flex-direction: row-reverse;
                padding-left: 8px;
                justify-content: space-between;
            }

            .close-banner {
                line-height: 48px;
            }

            .close-banner .banner-content {
                justify-content: center;
            }
        }

    </style>
    <div role="banner" id="ph-banner" class="banner">
        <div class="banner-content">
            <div class="banner-image"><img src="/img/ph-banner/meow.svg" alt=""/> <img src="/img/ph-banner/cat.svg" alt=""/></div>
            <div class="banner-text banner-primary-text">Dyte is launching soon on Product Hunt!</div>
            <div class="banner-cta-container">
                <a style="text-decoration: none; cursor: pointer; margin: 0 12px;" target="_blank" href="${ctaLink}"><div class="banner-cta">Get 100k Free Min</div></a>
                <div class="banner-text"><span id="days-diff"></span>d :<span style="padding-left:4px" id="hours-diff"></span>h :<span style="padding-left:4px" id="minutes-diff"></span>m</div>
            </div>
        </div>
        <a id="close-ph-banner" class="close-banner">
            <div class="banner-content" id="close-banner"><img src="/img/ph-banner/close.svg" alt="Close"/></div>
        </a>
    </div>
`;
const DAY = 1000 * 60 * 60 * 24;
const HOUR = 1000 * 60 * 60;
const MINUTE = 1000 * 60;
const COOKIE_NAME = 'ph-banner';
const END_DATE = '2023-01-30T00:01:00.000Z';

function setCookie(value) {
  const date = new Date();
  date.setTime(date.getTime() + DAY);
  document.cookie = `${COOKIE_NAME}=${value}; expires=${date.toUTCString()}; path=/; domain=.dyte.io;`;
}

function setLocalStorage(hide) {
  localStorage.setItem('docusaurus.announcement.id', COOKIE_NAME);
  localStorage.setItem('docusaurus.announcement.dismiss', hide);
}

function getCookieValue() {
  // get cookie from parent domain if exists
  const cookies = document.cookie.split(';');
  const cookie = cookies.find((c) => c.includes(`${COOKIE_NAME}=`));
  if (cookie) {
    const value = cookie.split('=')[1];
    return parseInt(value, 10);
  }

  return 0;
}

function hideBanner() {
  setCookie(new Date().getTime());
  setLocalStorage(true);
}

function showBanner() {
  setCookie(new Date().getTime() - DAY);
  setLocalStorage(false);
}

// if banner is dismissed, don't show banner
function showByLocalStore() {
  if (localStorage.getItem('docusaurus.announcement.id') !== COOKIE_NAME)
    return true;
  const value = localStorage.getItem('docusaurus.announcement.dismiss');
  return value === 'false';
}

// if cookie value is 24 hours ago or more, return true
function showByCookie() {
  const cookieStatus = getCookieValue();
  const diff = new Date().getTime() - cookieStatus;
  return diff > DAY;
}

// if status is 24 hours ago or more, show banner
// if banner is dismissed, don't show banner
function shouldShowBanner() {
  return showByCookie() && showByLocalStore();
}

class Banner extends HTMLElement {
  time = new Date(END_DATE).getTime();

  days = '00';

  hours = '00';

  minutes = '00';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  getTime() {
    // compute date, hours and minutes from time
    const now = new Date().getTime();
    const diff = this.time - now;
    const days = Math.floor(diff / DAY);
    const hours = Math.floor((diff % DAY) / HOUR);
    const minutes = Math.floor((diff % HOUR) / MINUTE);

    return { days, hours, minutes };
  }

  updateTime() {
    const element = this.shadowRoot.getElementById(COOKIE_NAME);
    if (!shouldShowBanner()) {
      if (!showByCookie() || !showByLocalStore()) {
        hideBanner();
      }
      element.style.display = 'none';
      return;
    }

    element.style.display = 'inline-block';
    const { days, hours, minutes } = this.getTime();
    this.days = days < 10 ? `0${days}` : days.toString();
    this.hours = hours < 10 ? `0${hours}` : hours.toString();
    this.minutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    this.shadowRoot.getElementById('days-diff').innerHTML = this.days;
    this.shadowRoot.getElementById('hours-diff').innerHTML = this.hours;
    this.shadowRoot.getElementById('minutes-diff').innerHTML = this.minutes;
  }

  connectedCallback() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 60000);
    this.shadowRoot
      .getElementById('close-ph-banner')
      .addEventListener('click', () => {
        this.shadowRoot.getElementById(COOKIE_NAME).style.display = 'none';
        hideBanner();
        const event = new CustomEvent('hideBanner');
        this.dispatchEvent(event);
        // Only for docs portal
        window.location.reload();
      });
  }
}

window.customElements.define(COOKIE_NAME, Banner);
