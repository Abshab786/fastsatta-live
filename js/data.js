// Fastsatta.live - Market & Chart Data Engine with Complete Full Database Backup Import (10 Markets)

const DEFAULT_MARKETS = [
  { id: 'm1', name: 'DISAWAR', slug: 'disawar', resultTime: '05:00 AM', openTime: '03:00 AM', closeTime: '04:30 AM', category: 'DESAWAR', timeMinutes: 300, order: 1 },
  { id: 'm2', name: 'HARYANA KING', slug: 'haryana-king', resultTime: '01:30 PM', openTime: '11:30 AM', closeTime: '01:00 PM', category: 'MAIN', timeMinutes: 810, order: 2 },
  { id: 'm3', name: 'RAM BAZAR', slug: 'ram-bazar', resultTime: '02:30 PM', openTime: '12:30 PM', closeTime: '02:00 PM', category: 'MAIN', timeMinutes: 870, order: 3 },
  { id: 'm4', name: 'DELHI BAZAR', slug: 'delhi-bazar', resultTime: '03:10 PM', openTime: '01:00 PM', closeTime: '02:45 PM', category: 'DELHI', timeMinutes: 910, order: 4 },
  { id: 'm5', name: 'SHREE GANESH', slug: 'shree-ganesh', resultTime: '04:40 PM', openTime: '02:30 PM', closeTime: '04:15 PM', category: 'DELHI', timeMinutes: 1000, order: 5 },
  { id: 'm6', name: 'FARIDABAD', slug: 'faridabad', resultTime: '06:10 PM', openTime: '04:00 PM', closeTime: '05:45 PM', category: 'MAIN', timeMinutes: 1090, order: 6 },
  { id: 'm7', name: 'AMBALA KING', slug: 'ambala-king', resultTime: '07:30 PM', openTime: '05:30 PM', closeTime: '07:00 PM', category: 'MAIN', timeMinutes: 1170, order: 7 },
  { id: 'm8', name: 'GAZIYABAD', slug: 'gaziyabad', resultTime: '10:00 PM', openTime: '08:00 PM', closeTime: '09:30 PM', category: 'MAIN', timeMinutes: 1320, order: 8 },
  { id: 'm9', name: 'HIMACHAL NIGHT', slug: 'himachal-night', resultTime: '10:40 PM', openTime: '08:30 PM', closeTime: '10:15 PM', category: 'MAIN', timeMinutes: 1360, order: 9 },
  { id: 'm10', name: 'GALI', slug: 'gali', resultTime: '12:00 AM', openTime: '10:00 PM', closeTime: '11:30 PM', category: 'DESAWAR', timeMinutes: 1440, order: 10 },
];

const DEFAULT_SETTINGS = {
  waLink: "https://api.whatsapp.com/send?phone=918628963178&text=%E0%A4%AE%E0%A5%81%E0%A4%9B%E0%A5%87%20%E0%A4%97%E0%A5%87%E0%A4%AE%20%E0%A4%AA%E0%A5%8D%E0%A4%B2%E0%A5%87%20%E0%A4%95%E0%A4%B0%E0%A4%A1%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%82",
  tgLink: "https://t.me/",
  waEnabled: true,
  tgEnabled: true
};

const BACKUP_DATABASE = {
  "2026": {
    "10": {
      "01": { "AK": "63", "DB": "76", "FB": "42", "GL": "93", "GZ": "67", "HK": "85", "HN": "00", "RB": "17", "SG": "51", "DS": "XX" },
      "02": { "AK": "10", "DB": "25", "DS": "52", "FB": "05", "GL": "01", "GZ": "81", "HK": "10", "HN": "09", "RB": "75", "SG": "31" },
      "03": { "AK": "88", "DB": "25", "DS": "18", "FB": "58", "GL": "68", "GZ": "95", "HK": "80", "HN": "55", "RB": "56", "SG": "54" },
      "04": { "AK": "77", "DB": "91", "DS": "15", "FB": "36", "GL": "80", "GZ": "98", "HK": "67", "HN": "35", "RB": "88", "SG": "46" },
      "05": { "AK": "44", "DB": "86", "DS": "70", "FB": "26", "GL": "24", "GZ": "78", "HK": "58", "HN": "36", "RB": "21", "SG": "18" },
      "06": { "AK": "98", "DB": "29", "DS": "59", "FB": "01", "GL": "53", "GZ": "38", "HK": "94", "HN": "44", "RB": "59", "SG": "27" },
      "07": { "AK": "96", "DB": "06", "DS": "23", "FB": "87", "GL": "29", "GZ": "84", "HK": "43", "HN": "21", "RB": "55", "SG": "89" },
      "08": { "AK": "12", "DB": "07", "DS": "90", "FB": "92", "GL": "62", "GZ": "74", "HK": "00", "HN": "27", "RB": "13", "SG": "02" },
      "09": { "AK": "12", "DB": "07", "DS": "26", "FB": "92", "GL": "62", "GZ": "74", "HK": "96", "HN": "27", "RB": "13", "SG": "02" }
    },
    "09": {
      "01": { "DB": "58", "SG": "89", "FB": "45", "GZ": "86", "GL": "81", "DS": "XX" },
      "02": { "DB": "52", "SG": "54", "FB": "19", "GZ": "85", "GL": "96", "DS": "69" },
      "03": { "DB": "88", "SG": "20", "FB": "08", "GZ": "32", "GL": "77", "DS": "57" },
      "04": { "DB": "18", "SG": "01", "FB": "02", "GZ": "95", "GL": "26", "DS": "95" },
      "05": { "DB": "44", "SG": "02", "FB": "30", "GZ": "68", "GL": "37", "DS": "59" },
      "06": { "DB": "71", "SG": "25", "FB": "88", "GZ": "69", "GL": "94", "DS": "78" },
      "07": { "DB": "61", "SG": "17", "FB": "02", "GZ": "02", "GL": "10", "DS": "67" },
      "08": { "DB": "84", "SG": "83", "FB": "71", "GZ": "93", "GL": "64", "DS": "92" },
      "09": { "DB": "18", "SG": "15", "FB": "29", "GZ": "93", "GL": "69", "DS": "54" },
      "10": { "DB": "52", "SG": "12", "FB": "15", "GZ": "72", "GL": "40", "DS": "93" },
      "11": { "DB": "59", "SG": "32", "FB": "72", "GZ": "98", "GL": "34", "DS": "40" },
      "12": { "DB": "81", "SG": "42", "FB": "65", "GZ": "16", "GL": "35", "DS": "46" },
      "13": { "DB": "55", "SG": "48", "FB": "74", "GZ": "47", "GL": "72", "DS": "02" },
      "14": { "DB": "86", "SG": "34", "FB": "30", "GZ": "50", "GL": "87", "DS": "35" },
      "15": { "DB": "46", "SG": "28", "FB": "24", "GZ": "19", "GL": "83", "DS": "89" },
      "16": { "DB": "68", "SG": "94", "FB": "21", "GZ": "42", "GL": "91", "DS": "31" },
      "17": { "DB": "99", "SG": "50", "FB": "38", "GZ": "34", "GL": "73", "DS": "90" },
      "18": { "DB": "84", "SG": "38", "FB": "36", "GZ": "03", "GL": "50", "DS": "49" },
      "19": { "DB": "24", "SG": "20", "FB": "21", "GZ": "86", "GL": "07", "DS": "35" },
      "20": { "DB": "47", "SG": "80", "FB": "84", "GZ": "24", "GL": "66", "DS": "32" },
      "21": { "AK": "94", "DB": "62", "DS": "01", "FB": "71", "GL": "32", "GZ": "70", "HK": "27", "HN": "08", "RB": "87", "SG": "08" },
      "22": { "AK": "94", "DB": "03", "DS": "73", "FB": "42", "GL": "00", "GZ": "50", "HK": "01", "HN": "11", "RB": "98", "SG": "98" },
      "23": { "AK": "69", "DB": "92", "DS": "35", "FB": "00", "GL": "02", "GZ": "42", "HK": "10", "HN": "15", "RB": "29", "SG": "10" },
      "24": { "AK": "16", "DB": "27", "DS": "26", "FB": "38", "GL": "90", "GZ": "32", "HK": "71", "HN": "77", "RB": "56", "SG": "48" },
      "25": { "AK": "63", "DB": "44", "DS": "86", "FB": "08", "GL": "37", "GZ": "63", "HK": "20", "HN": "91", "RB": "78", "SG": "68" },
      "26": { "AK": "43", "DB": "55", "DS": "48", "FB": "09", "GL": "66", "GZ": "18", "HK": "67", "HN": "19", "RB": "66", "SG": "43" },
      "27": { "AK": "82", "DB": "35", "DS": "81", "FB": "61", "GL": "64", "GZ": "66", "HK": "64", "HN": "27", "RB": "16", "SG": "07" },
      "28": { "AK": "77", "DB": "66", "DS": "49", "FB": "58", "GL": "03", "GZ": "03", "HK": "59", "HN": "40", "RB": "00", "SG": "90" },
      "29": { "AK": "15", "DB": "51", "DS": "43", "FB": "90", "GL": "66", "GZ": "20", "HK": "88", "HN": "76", "RB": "98", "SG": "61" },
      "30": { "AK": "XX", "DB": "XX", "DS": "25", "FB": "XX", "GL": "XX", "GZ": "XX", "HK": "XX", "HN": "XX", "RB": "XX", "SG": "XX" }
    }
  }
};

// ⏰ Reliable IST Date Helpers (UTC+05:30)
function getISTDateObj() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 60 * 60000;
  return new Date(utc + istOffset);
}

function getISTDateString() {
  const d = getISTDateObj();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function generateFullDemoResults() {
  const results = [];
  let idCount = 1;

  const marketCodeMap = {
    'DS': 'disawar',
    'HK': 'haryana-king',
    'RB': 'ram-bazar',
    'DB': 'delhi-bazar',
    'SG': 'shree-ganesh',
    'FB': 'faridabad',
    'AK': 'ambala-king',
    'GZ': 'gaziyabad',
    'HN': 'himachal-night',
    'GL': 'gali'
  };

  // Process imported Backup Database Months
  const year2026 = BACKUP_DATABASE["2026"];
  for (const monthKey in year2026) {
    const monthNum = parseInt(monthKey);
    const monthData = year2026[monthKey];

    for (const dayKey in monthData) {
      const dayNum = parseInt(dayKey);
      const dayStr = String(dayNum).padStart(2, '0');
      const dateStr = `2026-${monthKey}-${dayStr}`;
      const dayMap = monthData[dayKey];

      DEFAULT_MARKETS.forEach(m => {
        let code = Object.keys(marketCodeMap).find(k => marketCodeMap[k] === m.slug);
        let val = (code && dayMap[code]) ? dayMap[code] : '';
        if (!val || val === '') val = 'XX';

        results.push({
          id: `res-${m.id}-${dateStr}`,
          marketId: m.id,
          marketName: m.name,
          slug: m.slug,
          resultValue: val,
          yesterdayValue: 'XX',
          patti: `${120 + dayNum}-${val}-${340 + dayNum}`,
          resultDate: dateStr,
          resultTime: m.resultTime,
          status: val === 'XX' ? 'PENDING' : 'UPDATED',
          isSecret: val === 'XX',
          showInstantly: val !== 'XX',
          year: 2026,
          month: monthNum,
          day: dayNum,
          updatedAt: `${dateStr}T12:00:00.000Z`
        });
      });
    }
  }

  return results;
}

class DataEngine {
  constructor() {
    this.init();
    this.initFirebaseSync();
  }

  init() {
    localStorage.setItem('fastsatta_markets', JSON.stringify(DEFAULT_MARKETS));
    // Always sync full imported dataset
    localStorage.setItem('fastsatta_results', JSON.stringify(generateFullDemoResults()));
    if (!localStorage.getItem('fastsatta_settings')) {
      localStorage.setItem('fastsatta_settings', JSON.stringify(DEFAULT_SETTINGS));
    }
  }

  // 🔥 Firebase Realtime Cloud Sync
  initFirebaseSync() {
    if (typeof firebase !== 'undefined' && firebase.database) {
      try {
        this.db = firebase.database();
      } catch(e) {
        console.warn("Firebase db init:", e);
      }

      if (this.db) {
        this.db.ref('fastsatta/results').on('value', (snapshot) => {
          const fbData = snapshot.val();
          if (fbData) {
            const resultsList = Object.values(fbData);
            localStorage.setItem('fastsatta_results', JSON.stringify(resultsList));
            this.refreshAllPageViews();
          }
        }, (error) => {
          console.warn("⚠️ Firebase Results Sync Error:", error.message);
        });

        this.db.ref('fastsatta/markets').on('value', (snapshot) => {
          const fbMarkets = snapshot.val();
          if (fbMarkets) {
            localStorage.setItem('fastsatta_markets', JSON.stringify(fbMarkets));
            this.refreshAllPageViews();
          }
        });

        this.db.ref('fastsatta/settings').on('value', (snapshot) => {
          const fbSettings = snapshot.val();
          if (fbSettings) {
            localStorage.setItem('fastsatta_settings', JSON.stringify(fbSettings));
            if (typeof syncSocialSettings === 'function') syncSocialSettings();
          }
        });
      }
    }
  }

  refreshAllPageViews() {
    if (typeof renderHomePage === 'function') renderHomePage();
    if (typeof renderTodayPage === 'function') renderTodayPage();
    if (typeof renderRecordChartPage === 'function') renderRecordChartPage();
    if (typeof renderResultsPage === 'function') renderResultsPage();
    if (typeof renderMarketDetailPage === 'function') renderMarketDetailPage();
  }

  getMarkets() {
    return JSON.parse(localStorage.getItem('fastsatta_markets') || '[]');
  }

  saveMarkets(markets) {
    localStorage.setItem('fastsatta_markets', JSON.stringify(markets));
    if (this.db) {
      this.db.ref('fastsatta/markets').set(markets, (error) => {
        if (error) {
          console.error("❌ Firebase Markets Write Error:", error.message);
        }
      });
    }
    this.refreshAllPageViews();
  }

  getSettings() {
    return JSON.parse(localStorage.getItem('fastsatta_settings') || JSON.stringify(DEFAULT_SETTINGS));
  }

  saveSettings(settings) {
    localStorage.setItem('fastsatta_settings', JSON.stringify(settings));
    if (this.db) {
      this.db.ref('fastsatta/settings').set(settings, (error) => {
        if (error) {
          console.error("❌ Firebase Settings Write Error:", error.message);
        }
      });
    }
  }

  getResults() {
    return JSON.parse(localStorage.getItem('fastsatta_results') || '[]');
  }

  saveResults(results) {
    localStorage.setItem('fastsatta_results', JSON.stringify(results));
    this.refreshAllPageViews();
  }

  deleteResult(marketId, resultDate) {
    let results = this.getResults();
    results = results.filter(r => !(r.marketId === marketId && r.resultDate === resultDate));
    this.saveResults(results);

    if (this.db) {
      this.db.ref('fastsatta/results').orderByChild('marketId').equalTo(marketId).once('value', (snapshot) => {
        snapshot.forEach((child) => {
          if (child.val().resultDate === resultDate) {
            child.ref.remove();
          }
        });
      });
    }

    return true;
  }

  resetResultToWaiting(marketId, resultDate) {
    const results = this.getResults();
    const idx = results.findIndex(r => r.marketId === marketId && r.resultDate === resultDate);
    if (idx >= 0) {
      results[idx].resultValue = 'XX';
      results[idx].status = 'PENDING';
      results[idx].isSecret = true;
      results[idx].showInstantly = false;
      this.saveResults(results);

      if (this.db) {
        this.db.ref(`fastsatta/results/${results[idx].id}`).set(results[idx]);
      }
      return true;
    }
    return false;
  }

  getTodaySummaryDynamic(todayDate = null, yesterdayDate = null) {
    const istDateStr = getISTDateString();
    if (!todayDate) todayDate = istDateStr;

    if (!yesterdayDate) {
      const d = getISTDateObj();
      d.setDate(d.getDate() - 1);
      yesterdayDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    const markets = this.getMarkets();
    const allResults = this.getResults();

    const nowMinutes = getISTDateObj().getHours() * 60 + getISTDateObj().getMinutes();

    const summaryList = markets.map(m => {
      let t = allResults.find(r => r.marketId === m.id && r.resultDate === todayDate);

      // Smart Fallback
      if (!t) {
        const mResults = allResults.filter(r => r.marketId === m.id);
        if (mResults.length > 0) {
          t = mResults[0];
        }
      }

      let y = allResults.find(r => r.marketId === m.id && r.resultDate === yesterdayDate);
      if (!y && t) {
        const priorResults = allResults.filter(r => r.marketId === m.id && r.resultDate < t.resultDate);
        if (priorResults.length > 0) {
          y = priorResults[0];
        }
      }

      let badge = 'NONE';
      let priorityScore = 100;
      let isFreshNew = false;

      if (t) {
        if (t.status === 'LIVE' || t.status === 'UPDATED') {
          badge = 'LIVE ⚡';
          priorityScore = 10;
          isFreshNew = true;
        } else if (t.status === 'PENDING' || t.isSecret) {
          badge = 'WAITING ⏳';
          priorityScore = 20;
        }
      } else {
        const timeDiff = m.timeMinutes - nowMinutes;
        if (timeDiff > 0 && timeDiff <= 60) {
          priorityScore = 15;
          badge = 'WAITING ⏳';
        } else {
          priorityScore = 40;
        }
      }

      return {
        marketId: m.id,
        marketName: m.name,
        slug: m.slug,
        resultTime: m.resultTime,
        timeMinutes: m.timeMinutes || 0,
        openTime: m.openTime,
        closeTime: m.closeTime,
        category: m.category,
        priorityScore: priorityScore,
        badge: badge,
        isFreshNew: isFreshNew,
        todayValue: (t && t.resultValue && t.resultValue !== '') ? t.resultValue : 'XX',
        yesterdayValue: (y && y.resultValue && y.resultValue !== '') ? y.resultValue : (t && t.yesterdayValue ? t.yesterdayValue : 'XX'),
        isSecret: t ? !!t.isSecret : false,
        showInstantly: t ? !!t.showInstantly : true,
        patti: t ? t.patti : null,
        todayDate: t ? t.resultDate : todayDate,
        yesterdayDate: y ? y.resultDate : yesterdayDate,
        status: t ? t.status : 'PENDING',
      };
    });

    return summaryList.sort((a, b) => {
      if (a.priorityScore !== b.priorityScore) {
        return a.priorityScore - b.priorityScore;
      }
      return a.timeMinutes - b.timeMinutes;
    });
  }

  getMonthlyMatrix(year = 2026, month = 10, marketSlugs = ['disawar', 'faridabad', 'gaziyabad', 'gali']) {
    const allResults = this.getResults();
    const istDate = getISTDateObj();
    const curYear = istDate.getFullYear();
    const curMonth = istDate.getMonth() + 1;
    const curDay = istDate.getDate();

    const daysInMonth = new Date(year, month, 0).getDate();

    let maxDayToShow = daysInMonth;
    if (year === curYear && month === curMonth) {
      maxDayToShow = curDay;
    }

    const rows = [];
    for (let day = 1; day <= maxDayToShow; day++) {
      const isLastDayOfMonth = (day === daysInMonth);
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayData = { day, dateStr, values: {} };

      marketSlugs.forEach(slug => {
        if (isLastDayOfMonth && slug !== 'disawar') {
          dayData.values[slug] = '---';
          return;
        }

        const match = allResults.find(r => r.slug === slug && r.year === year && r.month === month && r.day === day);
        if (match && match.resultValue && match.resultValue !== '') {
          dayData.values[slug] = match.resultValue;
        } else {
          dayData.values[slug] = 'XX';
        }
      });

      rows.push(dayData);
    }

    return { year, month, daysInMonth, maxDayToShow, marketSlugs, rows };
  }

  addOrUpdateResult(data) {
    const results = this.getResults();
    const dateParts = data.resultDate.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    const idx = results.findIndex(r => r.marketId === data.marketId && r.resultDate === data.resultDate);

    const record = {
      id: idx >= 0 ? results[idx].id : `res-${data.marketId}-${data.resultDate}`,
      marketId: data.marketId,
      marketName: data.marketName,
      slug: data.slug,
      resultValue: data.resultValue,
      yesterdayValue: data.yesterdayValue || 'XX',
      patti: data.patti || null,
      resultDate: data.resultDate,
      resultTime: data.resultTime,
      status: data.status || 'UPDATED',
      isSecret: !!data.isSecret,
      showInstantly: !!data.showInstantly,
      year,
      month,
      day,
      updatedAt: new Date().toISOString()
    };

    if (idx >= 0) {
      results[idx] = record;
    } else {
      results.unshift(record);
    }

    this.saveResults(results);

    // Sync to Firebase Database Cloud with Explicit Error Feedback
    if (this.db) {
      this.db.ref(`fastsatta/results/${record.id}`).set(record, (error) => {
        if (error) {
          console.error("❌ Firebase Write Error:", error.message);
          alert(`⚠️ FIREBASE PERMISSION NOTICE:\n\nFirebase Cloud write failed with error: "${error.message}".\n\nPlease go to Firebase Console -> Realtime Database -> Rules and set:\n\n{ "rules": { ".read": true, ".write": true } }`);
        } else {
          console.log("✅ Firebase Cloud Sync Successful!");
        }
      });
    }

    return record;
  }
}

window.dataEngine = new DataEngine();
