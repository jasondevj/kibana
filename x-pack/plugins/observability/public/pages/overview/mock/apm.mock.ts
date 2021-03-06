/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { ApmFetchDataResponse, FetchData } from '../../../typings';

export const fetchApmData: FetchData<ApmFetchDataResponse> = () => {
  return Promise.resolve(response);
};

const response: ApmFetchDataResponse = {
  appLink: '/app/apm',
  stats: {
    services: {
      type: 'number',
      value: 7,
    },
    transactions: {
      type: 'number',
      value: 125808,
    },
  },
  series: {
    transactions: {
      coordinates: [
        {
          x: 1593295200000,
          y: 891,
        },
        {
          x: 1593297000000,
          y: 902,
        },
        {
          x: 1593298800000,
          y: 924,
        },
        {
          x: 1593300600000,
          y: 944,
        },
        {
          x: 1593302400000,
          y: 935,
        },
        {
          x: 1593304200000,
          y: 915,
        },
        {
          x: 1593306000000,
          y: 917,
        },
        {
          x: 1593307800000,
          y: 941,
        },
        {
          x: 1593309600000,
          y: 906,
        },
        {
          x: 1593311400000,
          y: 939,
        },
        {
          x: 1593313200000,
          y: 961,
        },
        {
          x: 1593315000000,
          y: 911,
        },
        {
          x: 1593316800000,
          y: 958,
        },
        {
          x: 1593318600000,
          y: 861,
        },
        {
          x: 1593320400000,
          y: 906,
        },
        {
          x: 1593322200000,
          y: 899,
        },
        {
          x: 1593324000000,
          y: 785,
        },
        {
          x: 1593325800000,
          y: 952,
        },
        {
          x: 1593327600000,
          y: 910,
        },
        {
          x: 1593329400000,
          y: 869,
        },
        {
          x: 1593331200000,
          y: 895,
        },
        {
          x: 1593333000000,
          y: 924,
        },
        {
          x: 1593334800000,
          y: 930,
        },
        {
          x: 1593336600000,
          y: 947,
        },
        {
          x: 1593338400000,
          y: 905,
        },
        {
          x: 1593340200000,
          y: 963,
        },
        {
          x: 1593342000000,
          y: 877,
        },
        {
          x: 1593343800000,
          y: 839,
        },
        {
          x: 1593345600000,
          y: 884,
        },
        {
          x: 1593347400000,
          y: 934,
        },
        {
          x: 1593349200000,
          y: 908,
        },
        {
          x: 1593351000000,
          y: 982,
        },
        {
          x: 1593352800000,
          y: 897,
        },
        {
          x: 1593354600000,
          y: 903,
        },
        {
          x: 1593356400000,
          y: 877,
        },
        {
          x: 1593358200000,
          y: 893,
        },
        {
          x: 1593360000000,
          y: 919,
        },
        {
          x: 1593361800000,
          y: 844,
        },
        {
          x: 1593363600000,
          y: 940,
        },
        {
          x: 1593365400000,
          y: 951,
        },
        {
          x: 1593367200000,
          y: 869,
        },
        {
          x: 1593369000000,
          y: 901,
        },
        {
          x: 1593370800000,
          y: 940,
        },
        {
          x: 1593372600000,
          y: 942,
        },
        {
          x: 1593374400000,
          y: 881,
        },
        {
          x: 1593376200000,
          y: 935,
        },
        {
          x: 1593378000000,
          y: 892,
        },
        {
          x: 1593379800000,
          y: 861,
        },
        {
          x: 1593381600000,
          y: 868,
        },
        {
          x: 1593383400000,
          y: 990,
        },
        {
          x: 1593385200000,
          y: 931,
        },
        {
          x: 1593387000000,
          y: 898,
        },
        {
          x: 1593388800000,
          y: 906,
        },
        {
          x: 1593390600000,
          y: 928,
        },
        {
          x: 1593392400000,
          y: 975,
        },
        {
          x: 1593394200000,
          y: 842,
        },
        {
          x: 1593396000000,
          y: 940,
        },
        {
          x: 1593397800000,
          y: 922,
        },
        {
          x: 1593399600000,
          y: 962,
        },
        {
          x: 1593401400000,
          y: 940,
        },
        {
          x: 1593403200000,
          y: 974,
        },
        {
          x: 1593405000000,
          y: 887,
        },
        {
          x: 1593406800000,
          y: 920,
        },
        {
          x: 1593408600000,
          y: 854,
        },
        {
          x: 1593410400000,
          y: 898,
        },
        {
          x: 1593412200000,
          y: 952,
        },
        {
          x: 1593414000000,
          y: 987,
        },
        {
          x: 1593415800000,
          y: 932,
        },
        {
          x: 1593417600000,
          y: 1009,
        },
        {
          x: 1593419400000,
          y: 989,
        },
        {
          x: 1593421200000,
          y: 939,
        },
        {
          x: 1593423000000,
          y: 929,
        },
        {
          x: 1593424800000,
          y: 929,
        },
        {
          x: 1593426600000,
          y: 864,
        },
        {
          x: 1593428400000,
          y: 895,
        },
        {
          x: 1593430200000,
          y: 876,
        },
        {
          x: 1593432000000,
          y: 68,
        },
        {
          x: 1593433800000,
          y: 0,
        },
        {
          x: 1593435600000,
          y: 0,
        },
        {
          x: 1593437400000,
          y: 0,
        },
        {
          x: 1593439200000,
          y: 0,
        },
        {
          x: 1593441000000,
          y: 0,
        },
        {
          x: 1593442800000,
          y: 700,
        },
        {
          x: 1593444600000,
          y: 930,
        },
        {
          x: 1593446400000,
          y: 953,
        },
        {
          x: 1593448200000,
          y: 995,
        },
        {
          x: 1593450000000,
          y: 883,
        },
        {
          x: 1593451800000,
          y: 902,
        },
        {
          x: 1593453600000,
          y: 988,
        },
        {
          x: 1593455400000,
          y: 947,
        },
        {
          x: 1593457200000,
          y: 889,
        },
        {
          x: 1593459000000,
          y: 982,
        },
        {
          x: 1593460800000,
          y: 919,
        },
        {
          x: 1593462600000,
          y: 854,
        },
        {
          x: 1593464400000,
          y: 894,
        },
        {
          x: 1593466200000,
          y: 901,
        },
        {
          x: 1593468000000,
          y: 970,
        },
        {
          x: 1593469800000,
          y: 840,
        },
        {
          x: 1593471600000,
          y: 857,
        },
        {
          x: 1593473400000,
          y: 943,
        },
        {
          x: 1593475200000,
          y: 825,
        },
        {
          x: 1593477000000,
          y: 955,
        },
        {
          x: 1593478800000,
          y: 959,
        },
        {
          x: 1593480600000,
          y: 921,
        },
        {
          x: 1593482400000,
          y: 924,
        },
        {
          x: 1593484200000,
          y: 840,
        },
        {
          x: 1593486000000,
          y: 943,
        },
        {
          x: 1593487800000,
          y: 919,
        },
        {
          x: 1593489600000,
          y: 882,
        },
        {
          x: 1593491400000,
          y: 900,
        },
        {
          x: 1593493200000,
          y: 930,
        },
        {
          x: 1593495000000,
          y: 854,
        },
        {
          x: 1593496800000,
          y: 905,
        },
        {
          x: 1593498600000,
          y: 922,
        },
        {
          x: 1593500400000,
          y: 863,
        },
        {
          x: 1593502200000,
          y: 966,
        },
        {
          x: 1593504000000,
          y: 910,
        },
        {
          x: 1593505800000,
          y: 851,
        },
        {
          x: 1593507600000,
          y: 867,
        },
        {
          x: 1593509400000,
          y: 904,
        },
        {
          x: 1593511200000,
          y: 913,
        },
        {
          x: 1593513000000,
          y: 889,
        },
        {
          x: 1593514800000,
          y: 907,
        },
        {
          x: 1593516600000,
          y: 965,
        },
        {
          x: 1593518400000,
          y: 868,
        },
        {
          x: 1593520200000,
          y: 919,
        },
        {
          x: 1593522000000,
          y: 945,
        },
        {
          x: 1593523800000,
          y: 883,
        },
        {
          x: 1593525600000,
          y: 902,
        },
        {
          x: 1593527400000,
          y: 900,
        },
        {
          x: 1593529200000,
          y: 829,
        },
        {
          x: 1593531000000,
          y: 919,
        },
        {
          x: 1593532800000,
          y: 942,
        },
        {
          x: 1593534600000,
          y: 924,
        },
        {
          x: 1593536400000,
          y: 958,
        },
        {
          x: 1593538200000,
          y: 867,
        },
        {
          x: 1593540000000,
          y: 844,
        },
        {
          x: 1593541800000,
          y: 976,
        },
        {
          x: 1593543600000,
          y: 937,
        },
        {
          x: 1593545400000,
          y: 891,
        },
        {
          x: 1593547200000,
          y: 936,
        },
        {
          x: 1593549000000,
          y: 895,
        },
        {
          x: 1593550800000,
          y: 850,
        },
        {
          x: 1593552600000,
          y: 899,
        },
      ],
    },
  },
};

export const emptyResponse: ApmFetchDataResponse = {
  appLink: '/app/apm',
  stats: {
    services: {
      type: 'number',
      value: 0,
    },
    transactions: {
      type: 'number',
      value: 0,
    },
  },
  series: {
    transactions: {
      coordinates: [],
    },
  },
};
