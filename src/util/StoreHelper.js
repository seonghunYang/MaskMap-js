import {green, amber, red, grey} from '@material-ui/core/colors';

function stat2idx(remain_stat) {
  switch (remain_stat){
    case "empty" : return 1;
    case "few" : return 2;
    case "some" : return 3;
    case "plenty" : return 4;
    case "break" : return 5;
    default: return 0;
  }
}

const COLOR = ["#000", grey[500], red[600], amber[600], green[800], grey[900]];
const DESC = ["정보없음", "1개 이하", "2~29개", "30~99개", "100개 이상", "판매중지"];
const SHORT = ["-", "0-1", "2+", "30+", "100+","x"];

export default function(store) {

  const idx = stat2idx(store.remain_stat);

  return {
    color: COLOR[idx],
    desc: DESC[idx],
    short: SHORT[idx],
  };
};