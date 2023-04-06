import { GoogleSpreadsheet } from "google-spreadsheet";


const sheetIDs = {
  get_home: 1858130171,
  get_weekly: 1018504332,
  get_1kers: 218528026,
}

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);
doc.useServiceAccountAuth({
  client_email: process.env.GOOGLE_SERVICE_ACC_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
});

export async function loadWeeklyMemberScores() {
  await doc.loadInfo();

  // member weekly scores data
  const sheet1 = doc.sheetsById[sheetIDs.get_home];
  const rows = await sheet1.getRows();
  const member_scores = rows.map((row, index) => {
    return {
      ign: row.IGN,
      avatar: row.AVATAR,
      class: row.CLASS,
      level: Number(row.LEVEL),
      culvert: Number(row.CULVERT),
      culvert_streak: Number(row.CULVERT_STREAK),
      flag: Number(row.FLAG),
      flag_streak: Number(row.FLAG_STREAK),
    }
  });

  return member_scores;
}

export async function loadBestScores() {
  await doc.loadInfo(); 

    // best guild scores data
    const sheet2 = doc.sheetsById[sheetIDs.get_weekly];
    await sheet2.loadCells('N2:O2');
    const best_culvert = await sheet2.getCellByA1("N2");
    const best_flag = await sheet2.getCellByA1("O2");

    return {
      best_culvert: Number(best_culvert.value),
      best_flag: Number(best_flag.value)
    }
}

export async function load1kers() {
  await doc.loadInfo();

    // // current 1k flag score member data
    const sheet3 = doc.sheetsById[sheetIDs.get_1kers];
    const flaggers = await sheet3.getRows();
    const flaggers_data = flaggers.map((row, index) => {
      return {
        ign: row.IGN,
        avatar: row.AVATAR
      }
    });

    return flaggers_data;
}

export async function loadWeeklyGuildScores() {
  await doc.loadInfo();

  const sheet1 = doc.sheetsById[sheetIDs.get_home];
  await sheet1.loadCells('M2:S2');
  const guild_scores = {
    culvert: Number(sheet1.getCellByA1('M2').value),
    culvert_rank: sheet1.getCellByA1('N2').value,
    flag: Number(sheet1.getCellByA1('O2').value),
    flag_rank: sheet1.getCellByA1('P2').value,
    culvert_participation: Number(sheet1.getCellByA1('Q2').value),
    flag_participation: Number(sheet1.getCellByA1('R2').value),
    member_count: Number(sheet1.getCellByA1('S2').value),
  }

  return guild_scores;
}

export async function loadGuildScoreHistory() {
  await doc.loadInfo();

  const sheet2 = doc.sheetsById[sheetIDs.get_weekly];
  const rows = await sheet2.getRows();
  const history = rows.map((row, index) => {
    return {
      [row.DATE]: {
        culvert: row.CULVERT_SCORE,
        culvert_participation: row.CULVERT_PARTICIPATION,
        flag: row.FLAG_SCORE,
        flag_participation: row.FLAG_PARTICIPATION
      }
    }
  })

  return history;
}

export async function loadAllPathIGNs() {
  await doc.loadInfo();

  const sheet1 = doc.sheetsById[sheetIDs.get_home];
  const rows = await sheet1.getRows();
  const igns = rows.map((row, index) => {
    return {
      params: {
        ign: row.IGN
      }
    }
  });

  return igns;
}