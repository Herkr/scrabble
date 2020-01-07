import isWordInDirectory from './IsWordInDirectory';

function allTrueComb(word) {
  var comb = allCombinations(word);
  var trueArray = [];

  console.time('time');
  for (let i = comb.length -1; i >= 0; i--) {
    if(isWordInDirectory(comb[i]) === true)
    {
      trueArray.push(comb[i]);
    }
  }
  console.timeEnd('time');
  return trueArray;
}

function allCombinations(word) {
  var replacedA = [];
  var replacedB = [];
  var replacedC = [];
  var replacedD = [];
  var replacedE = [];
  var replacedF = [];

  var combArray = [];

  if(word.length === 4)
  {
    // ABCD
    // 4
    combArray.push("ABCD", "ABC", "ABDC", "ABD", "AB", "ACBD", "ACB", "ACDB", "ACD", "AC", "ADBC", "ADB", "ADCB", "ADC", "AD", "A", "BACD", "BAC", "BADC", "BAD", "BA", "BCAD", "BCA", "BCDA", "BCD", "BC", "BDAC", "BDA", "BDCA", "BDC", "BD", "B", "CABD", "CAB", "CADB", "CAD", "CA", "CBAD", "CBA", "CBDA", "CBD", "CB", "CDAB", "CDA", "CDBA", "CDB", "CD", "C", "DABC", "DAB", "DACB", "DAC", "DA", "DBAC", "DBA", "DBCA", "DBC", "DB", "DCAB", "DCA", "DCBA", "DCB", "DC", "D");

    for(let i=0; i<combArray.length; i++)
    {
      replacedA.push(combArray[i].toString().replace('A', word[0]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedB.push(replacedA[i].toString().replace('B', word[1]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedC.push(replacedB[i].toString().replace('C', word[2]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedD.push(replacedC[i].toString().replace('D', word[3]));
    }

    console.log(replacedD);

    return replacedD;
  }
  if(word.length === 5)
  {
    // ABCDE
    // 5
    combArray.push("ABCDE", "ABCD", "ABCED", "ABCE", "ABC", "ABDCE", "ABDC", "ABDEC", "ABDE", "ABD", "ABECD", "ABEC", "ABEDC", "ABED", "ABE", "AB", "ACBDE", "ACBD", "ACBED", "ACBE", "ACB", "ACDBE", "ACDB", "ACDEB", "ACDE", "ACD", "ACEBD", "ACEB", "ACEDB", "ACED", "ACE", "AC", "ADBCE", "ADBC", "ADBEC", "ADBE", "ADB", "ADCBE", "ADCB", "ADCEB", "ADCE", "ADC", "ADEBC", "ADEB", "ADECB", "ADEC", "ADE", "AD", "AEBCD", "AEBC", "AEBDC", "AEBD", "AEB", "AECBD", "AECB", "AECDB", "AECD", "AEC", "AEDBC", "AEDB", "AEDCB", "AEDC", "AED", "AE", "A", "BACDE", "BACD", "BACED", "BACE", "BAC", "BADCE", "BADC", "BADEC", "BADE", "BAD", "BAECD", "BAEC", "BAEDC", "BAED", "BAE", "BA", "BCADE", "BCAD", "BCAED", "BCAE", "BCA", "BCDAE", "BCDA", "BCDEA", "BCDE", "BCD", "BCEAD", "BCEA", "BCEDA", "BCED", "BCE", "BC", "BDACE", "BDAC", "BDAEC", "BDAE", "BDA", "BDCAE", "BDCA", "BDCEA", "BDCE", "BDC", "BDEAC", "BDEA", "BDECA", "BDEC", "BDE", "BD", "BEACD", "BEAC", "BEADC", "BEAD", "BEA", "BECAD", "BECA", "BECDA", "BECD", "BEC", "BEDAC", "BEDA", "BEDCA", "BEDC", "BED", "BE", "B", "CABDE", "CABD", "CABED", "CABE", "CAB", "CADBE", "CADB", "CADEB", "CADE", "CAD", "CAEBD", "CAEB", "CAEDB", "CAED", "CAE", "CA", "CBADE", "CBAD", "CBAED", "CBAE", "CBA", "CBDAE", "CBDA", "CBDEA", "CBDE", "CBD", "CBEAD", "CBEA", "CBEDA", "CBED", "CBE", "CB", "CDABE", "CDAB", "CDAEB", "CDAE", "CDA", "CDBAE", "CDBA", "CDBEA", "CDBE", "CDB", "CDEAB", "CDEA", "CDEBA", "CDEB", "CDE", "CD", "CEABD", "CEAB", "CEADB", "CEAD", "CEA", "CEBAD", "CEBA", "CEBDA", "CEBD", "CEB", "CEDAB", "CEDA", "CEDBA", "CEDB", "CED", "CE", "C", "DABCE", "DABC", "DABEC", "DABE", "DAB", "DACBE", "DACB", "DACEB", "DACE", "DAC", "DAEBC", "DAEB", "DAECB", "DAEC", "DAE", "DA", "DBACE", "DBAC", "DBAEC", "DBAE", "DBA", "DBCAE", "DBCA", "DBCEA", "DBCE", "DBC", "DBEAC", "DBEA", "DBECA", "DBEC", "DBE", "DB", "DCABE", "DCAB", "DCAEB", "DCAE", "DCA", "DCBAE", "DCBA", "DCBEA", "DCBE", "DCB", "DCEAB", "DCEA", "DCEBA", "DCEB", "DCE", "DC", "DEABC", "DEAB", "DEACB", "DEAC", "DEA", "DEBAC", "DEBA", "DEBCA", "DEBC", "DEB", "DECAB", "DECA", "DECBA", "DECB", "DEC", "DE", "D", "EABCD", "EABC", "EABDC", "EABD", "EAB", "EACBD", "EACB", "EACDB", "EACD", "EAC", "EADBC", "EADB", "EADCB", "EADC", "EAD", "EA", "EBACD", "EBAC", "EBADC", "EBAD", "EBA", "EBCAD", "EBCA", "EBCDA", "EBCD", "EBC", "EBDAC", "EBDA", "EBDCA", "EBDC", "EBD", "EB", "ECABD", "ECAB", "ECADB", "ECAD", "ECA", "ECBAD", "ECBA", "ECBDA", "ECBD", "ECB", "ECDAB", "ECDA", "ECDBA", "ECDB", "ECD", "EC", "EDABC", "EDAB", "EDACB", "EDAC", "EDA", "EDBAC", "EDBA", "EDBCA", "EDBC", "EDB", "EDCAB", "EDCA", "EDCBA", "EDCB", "EDC", "ED", "E");
    
    for(let i=0; i<combArray.length; i++)
    {
      replacedA.push(combArray[i].toString().replace('A', word[0]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedB.push(replacedA[i].toString().replace('B', word[1]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedC.push(replacedB[i].toString().replace('C', word[2]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedD.push(replacedC[i].toString().replace('D', word[3]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedE.push(replacedD[i].toString().replace('E', word[4]));
    }
    
    console.log(replacedE);

    return replacedE;
  }
  if(word.length === 6)
  {
    // ABCDEF
    // 6
    combArray.push("ABCDEF", "ABCDE", "ABCDFE", "ABCDF", "ABCD", "ABCEDF", "ABCED", "ABCEFD", "ABCEF", "ABCE", "ABCFDE", "ABCFD", "ABCFED", "ABCFE", "ABCF", "ABC", "ABDCEF", "ABDCE", "ABDCFE", "ABDCF", "ABDC", "ABDECF", "ABDEC", "ABDEFC", "ABDEF", "ABDE", "ABDFCE", "ABDFC", "ABDFEC", "ABDFE", "ABDF", "ABD", "ABECDF", "ABECD", "ABECFD", "ABECF", "ABEC", "ABEDCF", "ABEDC", "ABEDFC", "ABEDF", "ABED", "ABEFCD", "ABEFC", "ABEFDC", "ABEFD", "ABEF", "ABE", "ABFCDE", "ABFCD", "ABFCED", "ABFCE", "ABFC", "ABFDCE", "ABFDC", "ABFDEC", "ABFDE", "ABFD", "ABFECD", "ABFEC", "ABFEDC", "ABFED", "ABFE", "ABF", "AB", "ACBDEF", "ACBDE", "ACBDFE", "ACBDF", "ACBD", "ACBEDF", "ACBED", "ACBEFD", "ACBEF", "ACBE", "ACBFDE", "ACBFD", "ACBFED", "ACBFE", "ACBF", "ACB", "ACDBEF", "ACDBE", "ACDBFE", "ACDBF", "ACDB", "ACDEBF", "ACDEB", "ACDEFB", "ACDEF", "ACDE", "ACDFBE", "ACDFB", "ACDFEB", "ACDFE", "ACDF", "ACD", "ACEBDF", "ACEBD", "ACEBFD", "ACEBF", "ACEB", "ACEDBF", "ACEDB", "ACEDFB", "ACEDF", "ACED", "ACEFBD", "ACEFB", "ACEFDB", "ACEFD", "ACEF", "ACE", "ACFBDE", "ACFBD", "ACFBED", "ACFBE", "ACFB", "ACFDBE", "ACFDB", "ACFDEB", "ACFDE", "ACFD", "ACFEBD", "ACFEB", "ACFEDB", "ACFED", "ACFE", "ACF", "AC", "ADBCEF", "ADBCE", "ADBCFE", "ADBCF", "ADBC", "ADBECF", "ADBEC", "ADBEFC", "ADBEF", "ADBE", "ADBFCE", "ADBFC", "ADBFEC", "ADBFE", "ADBF", "ADB", "ADCBEF", "ADCBE", "ADCBFE", "ADCBF", "ADCB", "ADCEBF", "ADCEB", "ADCEFB", "ADCEF", "ADCE", "ADCFBE", "ADCFB", "ADCFEB", "ADCFE", "ADCF", "ADC", "ADEBCF", "ADEBC", "ADEBFC", "ADEBF", "ADEB", "ADECBF", "ADECB", "ADECFB", "ADECF", "ADEC", "ADEFBC", "ADEFB", "ADEFCB", "ADEFC", "ADEF", "ADE", "ADFBCE", "ADFBC", "ADFBEC", "ADFBE", "ADFB", "ADFCBE", "ADFCB", "ADFCEB", "ADFCE", "ADFC", "ADFEBC", "ADFEB", "ADFECB", "ADFEC", "ADFE", "ADF", "AD", "AEBCDF", "AEBCD", "AEBCFD", "AEBCF", "AEBC", "AEBDCF", "AEBDC", "AEBDFC", "AEBDF", "AEBD", "AEBFCD", "AEBFC", "AEBFDC", "AEBFD", "AEBF", "AEB", "AECBDF", "AECBD", "AECBFD", "AECBF", "AECB", "AECDBF", "AECDB", "AECDFB", "AECDF", "AECD", "AECFBD", "AECFB", "AECFDB", "AECFD", "AECF", "AEC", "AEDBCF", "AEDBC", "AEDBFC", "AEDBF", "AEDB", "AEDCBF", "AEDCB", "AEDCFB", "AEDCF", "AEDC", "AEDFBC", "AEDFB", "AEDFCB", "AEDFC", "AEDF", "AED", "AEFBCD", "AEFBC", "AEFBDC", "AEFBD", "AEFB", "AEFCBD", "AEFCB", "AEFCDB", "AEFCD", "AEFC", "AEFDBC", "AEFDB", "AEFDCB", "AEFDC", "AEFD", "AEF", "AE", "AFBCDE", "AFBCD", "AFBCED", "AFBCE", "AFBC", "AFBDCE", "AFBDC", "AFBDEC", "AFBDE", "AFBD", "AFBECD", "AFBEC", "AFBEDC", "AFBED", "AFBE", "AFB", "AFCBDE", "AFCBD", "AFCBED", "AFCBE", "AFCB", "AFCDBE", "AFCDB", "AFCDEB", "AFCDE", "AFCD", "AFCEBD", "AFCEB", "AFCEDB", "AFCED", "AFCE", "AFC", "AFDBCE", "AFDBC", "AFDBEC", "AFDBE", "AFDB", "AFDCBE", "AFDCB", "AFDCEB", "AFDCE", "AFDC", "AFDEBC", "AFDEB", "AFDECB", "AFDEC", "AFDE", "AFD", "AFEBCD", "AFEBC", "AFEBDC", "AFEBD", "AFEB", "AFECBD", "AFECB", "AFECDB", "AFECD", "AFEC", "AFEDBC", "AFEDB", "AFEDCB", "AFEDC", "AFED", "AFE", "AF", "A", "BACDEF", "BACDE", "BACDFE", "BACDF", "BACD", "BACEDF", "BACED", "BACEFD", "BACEF", "BACE", "BACFDE", "BACFD", "BACFED", "BACFE", "BACF", "BAC", "BADCEF", "BADCE", "BADCFE", "BADCF", "BADC", "BADECF", "BADEC", "BADEFC", "BADEF", "BADE", "BADFCE", "BADFC", "BADFEC", "BADFE", "BADF", "BAD", "BAECDF", "BAECD", "BAECFD", "BAECF", "BAEC", "BAEDCF", "BAEDC", "BAEDFC", "BAEDF", "BAED", "BAEFCD", "BAEFC", "BAEFDC", "BAEFD", "BAEF", "BAE", "BAFCDE", "BAFCD", "BAFCED", "BAFCE", "BAFC", "BAFDCE", "BAFDC", "BAFDEC", "BAFDE", "BAFD", "BAFECD", "BAFEC", "BAFEDC", "BAFED", "BAFE", "BAF", "BA", "BCADEF", "BCADE", "BCADFE", "BCADF", "BCAD", "BCAEDF", "BCAED", "BCAEFD", "BCAEF", "BCAE", "BCAFDE", "BCAFD", "BCAFED", "BCAFE", "BCAF", "BCA", "BCDAEF", "BCDAE", "BCDAFE", "BCDAF", "BCDA", "BCDEAF", "BCDEA", "BCDEFA", "BCDEF", "BCDE", "BCDFAE", "BCDFA", "BCDFEA", "BCDFE", "BCDF", "BCD", "BCEADF", "BCEAD", "BCEAFD", "BCEAF", "BCEA", "BCEDAF", "BCEDA", "BCEDFA", "BCEDF", "BCED", "BCEFAD", "BCEFA", "BCEFDA", "BCEFD", "BCEF", "BCE", "BCFADE", "BCFAD", "BCFAED", "BCFAE", "BCFA", "BCFDAE", "BCFDA", "BCFDEA", "BCFDE", "BCFD", "BCFEAD", "BCFEA", "BCFEDA", "BCFED", "BCFE", "BCF", "BC", "BDACEF", "BDACE", "BDACFE", "BDACF", "BDAC", "BDAECF", "BDAEC", "BDAEFC", "BDAEF", "BDAE", "BDAFCE", "BDAFC", "BDAFEC", "BDAFE", "BDAF", "BDA", "BDCAEF", "BDCAE", "BDCAFE", "BDCAF", "BDCA", "BDCEAF", "BDCEA", "BDCEFA", "BDCEF", "BDCE", "BDCFAE", "BDCFA", "BDCFEA", "BDCFE", "BDCF", "BDC", "BDEACF", "BDEAC", "BDEAFC", "BDEAF", "BDEA", "BDECAF", "BDECA", "BDECFA", "BDECF", "BDEC", "BDEFAC", "BDEFA", "BDEFCA", "BDEFC", "BDEF", "BDE", "BDFACE", "BDFAC", "BDFAEC", "BDFAE", "BDFA", "BDFCAE", "BDFCA", "BDFCEA", "BDFCE", "BDFC", "BDFEAC", "BDFEA", "BDFECA", "BDFEC", "BDFE", "BDF", "BD", "BEACDF", "BEACD", "BEACFD", "BEACF", "BEAC", "BEADCF", "BEADC", "BEADFC", "BEADF", "BEAD", "BEAFCD", "BEAFC", "BEAFDC", "BEAFD", "BEAF", "BEA", "BECADF", "BECAD", "BECAFD", "BECAF", "BECA", "BECDAF", "BECDA", "BECDFA", "BECDF", "BECD", "BECFAD", "BECFA", "BECFDA", "BECFD", "BECF", "BEC", "BEDACF", "BEDAC", "BEDAFC", "BEDAF", "BEDA", "BEDCAF", "BEDCA", "BEDCFA", "BEDCF", "BEDC", "BEDFAC", "BEDFA", "BEDFCA", "BEDFC", "BEDF", "BED", "BEFACD", "BEFAC", "BEFADC", "BEFAD", "BEFA", "BEFCAD", "BEFCA", "BEFCDA", "BEFCD", "BEFC", "BEFDAC", "BEFDA", "BEFDCA", "BEFDC", "BEFD", "BEF", "BE", "BFACDE", "BFACD", "BFACED", "BFACE", "BFAC", "BFADCE", "BFADC", "BFADEC", "BFADE", "BFAD", "BFAECD", "BFAEC", "BFAEDC", "BFAED", "BFAE", "BFA", "BFCADE", "BFCAD", "BFCAED", "BFCAE", "BFCA", "BFCDAE", "BFCDA", "BFCDEA", "BFCDE", "BFCD", "BFCEAD", "BFCEA", "BFCEDA", "BFCED", "BFCE", "BFC", "BFDACE", "BFDAC", "BFDAEC", "BFDAE", "BFDA", "BFDCAE", "BFDCA", "BFDCEA", "BFDCE", "BFDC", "BFDEAC", "BFDEA", "BFDECA", "BFDEC", "BFDE", "BFD", "BFEACD", "BFEAC", "BFEADC", "BFEAD", "BFEA", "BFECAD", "BFECA", "BFECDA", "BFECD", "BFEC", "BFEDAC", "BFEDA", "BFEDCA", "BFEDC", "BFED", "BFE", "BF", "B", "CABDEF", "CABDE", "CABDFE", "CABDF", "CABD", "CABEDF", "CABED", "CABEFD", "CABEF", "CABE", "CABFDE", "CABFD", "CABFED", "CABFE", "CABF", "CAB", "CADBEF", "CADBE", "CADBFE", "CADBF", "CADB", "CADEBF", "CADEB", "CADEFB", "CADEF", "CADE", "CADFBE", "CADFB", "CADFEB", "CADFE", "CADF", "CAD", "CAEBDF", "CAEBD", "CAEBFD", "CAEBF", "CAEB", "CAEDBF", "CAEDB", "CAEDFB", "CAEDF", "CAED", "CAEFBD", "CAEFB", "CAEFDB", "CAEFD", "CAEF", "CAE", "CAFBDE", "CAFBD", "CAFBED", "CAFBE", "CAFB", "CAFDBE", "CAFDB", "CAFDEB", "CAFDE", "CAFD", "CAFEBD", "CAFEB", "CAFEDB", "CAFED", "CAFE", "CAF", "CA", "CBADEF", "CBADE", "CBADFE", "CBADF", "CBAD", "CBAEDF", "CBAED", "CBAEFD", "CBAEF", "CBAE", "CBAFDE", "CBAFD", "CBAFED", "CBAFE", "CBAF", "CBA", "CBDAEF", "CBDAE", "CBDAFE", "CBDAF", "CBDA", "CBDEAF", "CBDEA", "CBDEFA", "CBDEF", "CBDE", "CBDFAE", "CBDFA", "CBDFEA", "CBDFE", "CBDF", "CBD", "CBEADF", "CBEAD", "CBEAFD", "CBEAF", "CBEA", "CBEDAF", "CBEDA", "CBEDFA", "CBEDF", "CBED", "CBEFAD", "CBEFA", "CBEFDA", "CBEFD", "CBEF", "CBE", "CBFADE", "CBFAD", "CBFAED", "CBFAE", "CBFA", "CBFDAE", "CBFDA", "CBFDEA", "CBFDE", "CBFD", "CBFEAD", "CBFEA", "CBFEDA", "CBFED", "CBFE", "CBF", "CB", "CDABEF", "CDABE", "CDABFE", "CDABF", "CDAB", "CDAEBF", "CDAEB", "CDAEFB", "CDAEF", "CDAE", "CDAFBE", "CDAFB", "CDAFEB", "CDAFE", "CDAF", "CDA", "CDBAEF", "CDBAE", "CDBAFE", "CDBAF", "CDBA", "CDBEAF", "CDBEA", "CDBEFA", "CDBEF", "CDBE", "CDBFAE", "CDBFA", "CDBFEA", "CDBFE", "CDBF", "CDB", "CDEABF", "CDEAB", "CDEAFB", "CDEAF", "CDEA", "CDEBAF", "CDEBA", "CDEBFA", "CDEBF", "CDEB", "CDEFAB", "CDEFA", "CDEFBA", "CDEFB", "CDEF", "CDE", "CDFABE", "CDFAB", "CDFAEB", "CDFAE", "CDFA", "CDFBAE", "CDFBA", "CDFBEA", "CDFBE", "CDFB", "CDFEAB", "CDFEA", "CDFEBA", "CDFEB", "CDFE", "CDF", "CD", "CEABDF", "CEABD", "CEABFD", "CEABF", "CEAB", "CEADBF", "CEADB", "CEADFB", "CEADF", "CEAD", "CEAFBD", "CEAFB", "CEAFDB", "CEAFD", "CEAF", "CEA", "CEBADF", "CEBAD", "CEBAFD", "CEBAF", "CEBA", "CEBDAF", "CEBDA", "CEBDFA", "CEBDF", "CEBD", "CEBFAD", "CEBFA", "CEBFDA", "CEBFD", "CEBF", "CEB", "CEDABF", "CEDAB", "CEDAFB", "CEDAF", "CEDA", "CEDBAF", "CEDBA", "CEDBFA", "CEDBF", "CEDB", "CEDFAB", "CEDFA", "CEDFBA", "CEDFB", "CEDF", "CED", "CEFABD", "CEFAB", "CEFADB", "CEFAD", "CEFA", "CEFBAD", "CEFBA", "CEFBDA", "CEFBD", "CEFB", "CEFDAB", "CEFDA", "CEFDBA", "CEFDB", "CEFD", "CEF", "CE", "CFABDE", "CFABD", "CFABED", "CFABE", "CFAB", "CFADBE", "CFADB", "CFADEB", "CFADE", "CFAD", "CFAEBD", "CFAEB", "CFAEDB", "CFAED", "CFAE", "CFA", "CFBADE", "CFBAD", "CFBAED", "CFBAE", "CFBA", "CFBDAE", "CFBDA", "CFBDEA", "CFBDE", "CFBD", "CFBEAD", "CFBEA", "CFBEDA", "CFBED", "CFBE", "CFB", "CFDABE", "CFDAB", "CFDAEB", "CFDAE", "CFDA", "CFDBAE", "CFDBA", "CFDBEA", "CFDBE", "CFDB", "CFDEAB", "CFDEA", "CFDEBA", "CFDEB", "CFDE", "CFD", "CFEABD", "CFEAB", "CFEADB", "CFEAD", "CFEA", "CFEBAD", "CFEBA", "CFEBDA", "CFEBD", "CFEB", "CFEDAB", "CFEDA", "CFEDBA", "CFEDB", "CFED", "CFE", "CF", "C", "DABCEF", "DABCE", "DABCFE", "DABCF", "DABC", "DABECF", "DABEC", "DABEFC", "DABEF", "DABE", "DABFCE", "DABFC", "DABFEC", "DABFE", "DABF", "DAB", "DACBEF", "DACBE", "DACBFE", "DACBF", "DACB", "DACEBF", "DACEB", "DACEFB", "DACEF", "DACE", "DACFBE", "DACFB", "DACFEB", "DACFE", "DACF", "DAC", "DAEBCF", "DAEBC", "DAEBFC", "DAEBF", "DAEB", "DAECBF", "DAECB", "DAECFB", "DAECF", "DAEC", "DAEFBC", "DAEFB", "DAEFCB", "DAEFC", "DAEF", "DAE", "DAFBCE", "DAFBC", "DAFBEC", "DAFBE", "DAFB", "DAFCBE", "DAFCB", "DAFCEB", "DAFCE", "DAFC", "DAFEBC", "DAFEB", "DAFECB", "DAFEC", "DAFE", "DAF", "DA", "DBACEF", "DBACE", "DBACFE", "DBACF", "DBAC", "DBAECF", "DBAEC", "DBAEFC", "DBAEF", "DBAE", "DBAFCE", "DBAFC", "DBAFEC", "DBAFE", "DBAF", "DBA", "DBCAEF", "DBCAE", "DBCAFE", "DBCAF", "DBCA", "DBCEAF", "DBCEA", "DBCEFA", "DBCEF", "DBCE", "DBCFAE", "DBCFA", "DBCFEA", "DBCFE", "DBCF", "DBC", "DBEACF", "DBEAC", "DBEAFC", "DBEAF", "DBEA", "DBECAF", "DBECA", "DBECFA", "DBECF", "DBEC", "DBEFAC", "DBEFA", "DBEFCA", "DBEFC", "DBEF", "DBE", "DBFACE", "DBFAC", "DBFAEC", "DBFAE", "DBFA", "DBFCAE", "DBFCA", "DBFCEA", "DBFCE", "DBFC", "DBFEAC", "DBFEA", "DBFECA", "DBFEC", "DBFE", "DBF", "DB");
    combArray.push("DCABEF", "DCABE", "DCABFE", "DCABF", "DCAB", "DCAEBF", "DCAEB", "DCAEFB", "DCAEF", "DCAE", "DCAFBE", "DCAFB", "DCAFEB", "DCAFE", "DCAF", "DCA", "DCBAEF", "DCBAE", "DCBAFE", "DCBAF", "DCBA", "DCBEAF", "DCBEA", "DCBEFA", "DCBEF", "DCBE", "DCBFAE", "DCBFA", "DCBFEA", "DCBFE", "DCBF", "DCB", "DCEABF", "DCEAB", "DCEAFB", "DCEAF", "DCEA", "DCEBAF", "DCEBA", "DCEBFA", "DCEBF", "DCEB", "DCEFAB", "DCEFA", "DCEFBA", "DCEFB", "DCEF", "DCE", "DCFABE", "DCFAB", "DCFAEB", "DCFAE", "DCFA", "DCFBAE", "DCFBA", "DCFBEA", "DCFBE", "DCFB", "DCFEAB", "DCFEA", "DCFEBA", "DCFEB", "DCFE", "DCF", "DC", "DEABCF", "DEABC", "DEABFC", "DEABF", "DEAB", "DEACBF", "DEACB", "DEACFB", "DEACF", "DEAC", "DEAFBC", "DEAFB", "DEAFCB", "DEAFC", "DEAF", "DEA", "DEBACF", "DEBAC", "DEBAFC", "DEBAF", "DEBA", "DEBCAF", "DEBCA", "DEBCFA", "DEBCF", "DEBC", "DEBFAC", "DEBFA", "DEBFCA", "DEBFC", "DEBF", "DEB", "DECABF", "DECAB", "DECAFB", "DECAF", "DECA", "DECBAF", "DECBA", "DECBFA", "DECBF", "DECB", "DECFAB", "DECFA", "DECFBA", "DECFB", "DECF", "DEC", "DEFABC", "DEFAB", "DEFACB", "DEFAC", "DEFA", "DEFBAC", "DEFBA", "DEFBCA", "DEFBC", "DEFB", "DEFCAB", "DEFCA", "DEFCBA", "DEFCB", "DEFC", "DEF", "DE", "DFABCE", "DFABC", "DFABEC", "DFABE", "DFAB", "DFACBE", "DFACB", "DFACEB", "DFACE", "DFAC", "DFAEBC", "DFAEB", "DFAECB", "DFAEC", "DFAE", "DFA", "DFBACE", "DFBAC", "DFBAEC", "DFBAE", "DFBA", "DFBCAE", "DFBCA", "DFBCEA", "DFBCE", "DFBC", "DFBEAC", "DFBEA", "DFBECA", "DFBEC", "DFBE", "DFB", "DFCABE", "DFCAB", "DFCAEB", "DFCAE", "DFCA", "DFCBAE", "DFCBA", "DFCBEA", "DFCBE", "DFCB", "DFCEAB", "DFCEA", "DFCEBA", "DFCEB", "DFCE", "DFC", "DFEABC", "DFEAB", "DFEACB", "DFEAC", "DFEA", "DFEBAC", "DFEBA", "DFEBCA", "DFEBC", "DFEB", "DFECAB", "DFECA", "DFECBA", "DFECB", "DFEC", "DFE", "DF", "D", "EABCDF", "EABCD", "EABCFD", "EABCF", "EABC", "EABDCF", "EABDC", "EABDFC", "EABDF", "EABD", "EABFCD", "EABFC", "EABFDC", "EABFD", "EABF", "EAB", "EACBDF", "EACBD", "EACBFD", "EACBF", "EACB", "EACDBF", "EACDB", "EACDFB", "EACDF", "EACD", "EACFBD", "EACFB", "EACFDB", "EACFD", "EACF", "EAC", "EADBCF", "EADBC", "EADBFC", "EADBF", "EADB", "EADCBF", "EADCB", "EADCFB", "EADCF", "EADC", "EADFBC", "EADFB", "EADFCB", "EADFC", "EADF", "EAD", "EAFBCD", "EAFBC", "EAFBDC", "EAFBD", "EAFB", "EAFCBD", "EAFCB", "EAFCDB", "EAFCD", "EAFC", "EAFDBC", "EAFDB", "EAFDCB", "EAFDC", "EAFD", "EAF", "EA", "EBACDF", "EBACD", "EBACFD", "EBACF", "EBAC", "EBADCF", "EBADC", "EBADFC", "EBADF", "EBAD", "EBAFCD", "EBAFC", "EBAFDC", "EBAFD", "EBAF", "EBA", "EBCADF", "EBCAD", "EBCAFD", "EBCAF", "EBCA", "EBCDAF", "EBCDA", "EBCDFA", "EBCDF", "EBCD", "EBCFAD", "EBCFA", "EBCFDA", "EBCFD", "EBCF", "EBC", "EBDACF", "EBDAC", "EBDAFC", "EBDAF", "EBDA", "EBDCAF", "EBDCA", "EBDCFA", "EBDCF", "EBDC", "EBDFAC", "EBDFA", "EBDFCA", "EBDFC", "EBDF", "EBD", "EBFACD", "EBFAC", "EBFADC", "EBFAD", "EBFA", "EBFCAD", "EBFCA", "EBFCDA", "EBFCD", "EBFC", "EBFDAC", "EBFDA", "EBFDCA", "EBFDC", "EBFD", "EBF", "EB", "ECABDF", "ECABD", "ECABFD", "ECABF", "ECAB", "ECADBF", "ECADB", "ECADFB", "ECADF", "ECAD", "ECAFBD", "ECAFB", "ECAFDB", "ECAFD", "ECAF", "ECA", "ECBADF", "ECBAD", "ECBAFD", "ECBAF", "ECBA", "ECBDAF", "ECBDA", "ECBDFA", "ECBDF", "ECBD", "ECBFAD", "ECBFA", "ECBFDA", "ECBFD", "ECBF", "ECB", "ECDABF", "ECDAB", "ECDAFB", "ECDAF", "ECDA", "ECDBAF", "ECDBA", "ECDBFA", "ECDBF", "ECDB", "ECDFAB", "ECDFA", "ECDFBA", "ECDFB", "ECDF", "ECD", "ECFABD", "ECFAB", "ECFADB", "ECFAD", "ECFA", "ECFBAD", "ECFBA", "ECFBDA", "ECFBD", "ECFB", "ECFDAB", "ECFDA", "ECFDBA", "ECFDB", "ECFD", "ECF", "EC", "EDABCF", "EDABC", "EDABFC", "EDABF", "EDAB", "EDACBF", "EDACB", "EDACFB", "EDACF", "EDAC", "EDAFBC", "EDAFB", "EDAFCB", "EDAFC", "EDAF", "EDA", "EDBACF", "EDBAC", "EDBAFC", "EDBAF", "EDBA", "EDBCAF", "EDBCA", "EDBCFA", "EDBCF", "EDBC", "EDBFAC", "EDBFA", "EDBFCA", "EDBFC", "EDBF", "EDB", "EDCABF", "EDCAB", "EDCAFB", "EDCAF", "EDCA", "EDCBAF", "EDCBA", "EDCBFA", "EDCBF", "EDCB", "EDCFAB", "EDCFA", "EDCFBA", "EDCFB", "EDCF", "EDC", "EDFABC", "EDFAB", "EDFACB", "EDFAC", "EDFA", "EDFBAC", "EDFBA", "EDFBCA", "EDFBC", "EDFB", "EDFCAB", "EDFCA", "EDFCBA", "EDFCB", "EDFC", "EDF", "ED", "EFABCD", "EFABC", "EFABDC", "EFABD", "EFAB", "EFACBD", "EFACB", "EFACDB", "EFACD", "EFAC", "EFADBC", "EFADB", "EFADCB", "EFADC", "EFAD", "EFA", "EFBACD", "EFBAC", "EFBADC", "EFBAD", "EFBA", "EFBCAD", "EFBCA", "EFBCDA", "EFBCD", "EFBC", "EFBDAC", "EFBDA", "EFBDCA", "EFBDC", "EFBD", "EFB", "EFCABD", "EFCAB", "EFCADB", "EFCAD", "EFCA", "EFCBAD", "EFCBA", "EFCBDA", "EFCBD", "EFCB", "EFCDAB", "EFCDA", "EFCDBA", "EFCDB", "EFCD", "EFC", "EFDABC", "EFDAB", "EFDACB", "EFDAC", "EFDA", "EFDBAC", "EFDBA", "EFDBCA", "EFDBC", "EFDB", "EFDCAB", "EFDCA", "EFDCBA", "EFDCB", "EFDC", "EFD", "EF", "E", "FABCDE", "FABCD", "FABCED", "FABCE", "FABC", "FABDCE", "FABDC", "FABDEC", "FABDE", "FABD", "FABECD", "FABEC", "FABEDC", "FABED", "FABE", "FAB", "FACBDE", "FACBD", "FACBED", "FACBE", "FACB", "FACDBE", "FACDB", "FACDEB", "FACDE", "FACD", "FACEBD", "FACEB", "FACEDB", "FACED", "FACE", "FAC", "FADBCE", "FADBC", "FADBEC", "FADBE", "FADB", "FADCBE", "FADCB", "FADCEB", "FADCE", "FADC", "FADEBC", "FADEB", "FADECB", "FADEC", "FADE", "FAD", "FAEBCD", "FAEBC", "FAEBDC", "FAEBD", "FAEB", "FAECBD", "FAECB", "FAECDB", "FAECD", "FAEC", "FAEDBC", "FAEDB", "FAEDCB", "FAEDC", "FAED", "FAE", "FA", "FBACDE", "FBACD", "FBACED", "FBACE", "FBAC", "FBADCE", "FBADC", "FBADEC", "FBADE", "FBAD", "FBAECD", "FBAEC", "FBAEDC", "FBAED", "FBAE", "FBA", "FBCADE", "FBCAD", "FBCAED", "FBCAE", "FBCA", "FBCDAE", "FBCDA", "FBCDEA", "FBCDE", "FBCD", "FBCEAD", "FBCEA", "FBCEDA", "FBCED", "FBCE", "FBC", "FBDACE", "FBDAC", "FBDAEC", "FBDAE", "FBDA", "FBDCAE", "FBDCA", "FBDCEA", "FBDCE", "FBDC", "FBDEAC", "FBDEA", "FBDECA", "FBDEC", "FBDE", "FBD", "FBEACD", "FBEAC", "FBEADC", "FBEAD", "FBEA", "FBECAD", "FBECA", "FBECDA", "FBECD", "FBEC", "FBEDAC", "FBEDA", "FBEDCA", "FBEDC", "FBED", "FBE", "FB", "FCABDE", "FCABD", "FCABED", "FCABE", "FCAB", "FCADBE", "FCADB", "FCADEB", "FCADE", "FCAD", "FCAEBD", "FCAEB", "FCAEDB", "FCAED", "FCAE", "FCA", "FCBADE", "FCBAD", "FCBAED", "FCBAE", "FCBA", "FCBDAE", "FCBDA", "FCBDEA", "FCBDE", "FCBD", "FCBEAD", "FCBEA", "FCBEDA", "FCBED", "FCBE", "FCB", "FCDABE", "FCDAB", "FCDAEB", "FCDAE", "FCDA", "FCDBAE", "FCDBA", "FCDBEA", "FCDBE", "FCDB", "FCDEAB", "FCDEA", "FCDEBA", "FCDEB", "FCDE", "FCD", "FCEABD", "FCEAB", "FCEADB", "FCEAD", "FCEA", "FCEBAD", "FCEBA", "FCEBDA", "FCEBD", "FCEB", "FCEDAB", "FCEDA", "FCEDBA", "FCEDB", "FCED", "FCE", "FC", "FDABCE", "FDABC", "FDABEC", "FDABE", "FDAB", "FDACBE", "FDACB", "FDACEB", "FDACE", "FDAC", "FDAEBC", "FDAEB", "FDAECB", "FDAEC", "FDAE", "FDA", "FDBACE", "FDBAC", "FDBAEC", "FDBAE", "FDBA", "FDBCAE", "FDBCA", "FDBCEA", "FDBCE", "FDBC", "FDBEAC", "FDBEA", "FDBECA", "FDBEC", "FDBE", "FDB", "FDCABE", "FDCAB", "FDCAEB", "FDCAE", "FDCA", "FDCBAE", "FDCBA", "FDCBEA", "FDCBE", "FDCB", "FDCEAB", "FDCEA", "FDCEBA", "FDCEB", "FDCE", "FDC", "FDEABC", "FDEAB", "FDEACB", "FDEAC", "FDEA", "FDEBAC", "FDEBA", "FDEBCA", "FDEBC", "FDEB", "FDECAB", "FDECA", "FDECBA", "FDECB", "FDEC", "FDE", "FD", "FEABCD", "FEABC", "FEABDC", "FEABD", "FEAB", "FEACBD", "FEACB", "FEACDB", "FEACD", "FEAC", "FEADBC", "FEADB", "FEADCB", "FEADC", "FEAD", "FEA", "FEBACD", "FEBAC", "FEBADC", "FEBAD", "FEBA", "FEBCAD", "FEBCA", "FEBCDA", "FEBCD", "FEBC", "FEBDAC", "FEBDA", "FEBDCA", "FEBDC", "FEBD", "FEB", "FECABD", "FECAB", "FECADB", "FECAD", "FECA", "FECBAD", "FECBA", "FECBDA", "FECBD", "FECB", "FECDAB", "FECDA", "FECDBA", "FECDB", "FECD", "FEC", "FEDABC", "FEDAB", "FEDACB", "FEDAC", "FEDA", "FEDBAC", "FEDBA", "FEDBCA", "FEDBC", "FEDB", "FEDCAB", "FEDCA", "FEDCBA", "FEDCB", "FEDC", "FED", "FE", "F");
    
    for(let i=0; i<combArray.length; i++)
    {
      replacedA.push(combArray[i].toString().replace('A', word[0]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedB.push(replacedA[i].toString().replace('B', word[1]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedC.push(replacedB[i].toString().replace('C', word[2]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedD.push(replacedC[i].toString().replace('D', word[3]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedE.push(replacedD[i].toString().replace('E', word[4]));
    }
    for(let i=0; i<combArray.length; i++)
    {
      replacedF.push(replacedE[i].toString().replace('F', word[5]));
    }

    console.log(replacedF);

    return replacedF;
  }

  /*
const allCombinations = function(word) {
  var comb = [];
  if (word.length === 1) return word;
  for (let i = word.length -1; i >= 0; i--) {
    allCombinations(word.join('').replace(word[i], '').split('')).concat("").map(function(subtree) {
      return comb.push([word[i]].concat(subtree));
    });
  }
  return comb.map(function(str) {return str.join('')});
};*/
}

export default allTrueComb;