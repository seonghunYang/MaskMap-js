import produce from 'immer';

const baseState = {
  loading: false,
  error: "",
  stores: [
      {
        addr: '경기도 성남시 분당구 서현로210번길 2 105호 (서현동, 성지하이츠텔)',
        code: '31802095',
        created_at: '2020/05/05 16:45:00',
        lat: 37.3868395,
        lng: 127.1254838,
        name: '메디팜우정약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/04 09:26:00',
        type: '01'
      },
      {
        addr: '경기도 성남시 분당구 서현로 184 219호 (서현동, 엘지에클라트)',
        code: '31811931',
        created_at: '2020/05/05 16:45:00',
        lat: 37.3882631,
        lng: 127.1236949,
        name: '성민약국',
        remain_stat: 'break',
        stock_at: '2020/05/04 08:39:00',
        type: '01'
      },
      {
        addr: '경기도 성남시 분당구 내정로 29 307-1호 (정자동, 금곡프라자)',
        code: '31813232',
        created_at: '2020/05/05 16:45:00',
        lat: 37.3628586,
        lng: 127.1144417,
        name: '금곡프라자약국',
        remain_stat: 'some',
        stock_at: '2020/05/04 08:42:00',
        type: '01'
      },
      {
        addr: '경기도 성남시 분당구 야탑로 95 201-23~25호 (야탑동, 세신옴니코아빌딩)',
        code: '31814590',
        created_at: '2020/05/05 16:45:00',
        lat: 37.4101463,
        lng: 127.1292681,
        name: '밝은약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/04 08:57:00',
        type: '01'
      },
      {
        addr: '경기도 성남시 분당구 판교로 700 110호 (야탑동, 아파트형공장)',
        code: '31814841',
        created_at: '2020/05/05 16:45:00',
        lat: 37.4042805,
        lng: 127.1517384,
        name: '한약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/05 09:14:00',
        type: '01'
      },
      {
        addr: '경기도 성남시 분당구 성남대로 926 1층 (야탑동, 메트로빌딩)',
        code: '31815561',
        created_at: '2020/05/05 16:45:00',
        lat: 37.412667,
        lng: 127.1291861,
        name: '메트로약국',
        remain_stat: 'some',
        stock_at: '2020/05/04 08:37:00',
        type: '01'
      },
      {
        addr: '경기도 성남시 분당구 돌마로 80 2층 (구미동, 분당현대벤처빌,85~90.119~124호)',
        code: '31815782',
        created_at: '2020/05/05 16:45:00',
        lat: 37.3497433,
        lng: 127.1104142,
        name: '엄마손약국',
        remain_stat: 'break',
        stock_at: '2020/05/05 10:21:00',
        type: '01'
      },
      {
        addr: '경기도 성남시 분당구 미금로 48 111,112호 (구미동, 오성프라자)',
        code: '31816789',
        created_at: '2020/05/05 16:45:00',
        lat: 37.337721,
        lng: 127.1164728,
        name: '기린약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/04 09:19:00',
        type: '01'
      },
      {
        addr: '경기도 성남시 분당구 분당로 43 1층 (서현동)',
        code: '31819991',
        created_at: '2020/05/05 16:45:00',
        lat: 37.3840714,
        lng: 127.1202711,
        name: '우리약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/04 08:58:00',
        type: '01'
      },
      {
        addr: '경기도 성남시 분당구 벌말로 10 1층 107호 (야탑동, 목련마을근린상가)',
        code: '31822746',
        created_at: '2020/05/05 16:45:00',
        lat: 37.4085972,
        lng: 127.1402225,
        name: '유정약국',
        remain_stat: 'some',
        stock_at: '2020/05/04 13:49:00',
        type: '01'
      },
      {
        addr: '경기도 성남시 분당구 서현로180번길 19 1층 (서현동, 비전월드)',
        code: '31823599',
        created_at: '2020/05/05 16:45:00',
        lat: 37.387286,
        lng: 127.122009,
        name: '분당백제약국',
        remain_stat: 'plenty',
        stock_at: '2020/05/04 10:18:00',
        type: '01'
      }
    ] 
}
const reducer = produce((state, action) => {

}, baseState);

export default reducer;