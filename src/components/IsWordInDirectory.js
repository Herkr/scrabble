import Dictionary from '../json/Dictionary-seven.json';

function isWordInDirectory(word) {
    // array of all the words from the dictionary
    var wordsFromDictionary = Object.keys(Dictionary);

    // a, á, æ

    if(word.length !== 0)
    {
      if(word.charAt(0) === 'a' || word.charAt(0) === 'á' || word.charAt(0) === 'æ')
      {
        for (let i = 0; i < 3935; i++) {
          if(wordsFromDictionary[i] === word)
          {
            return true;
          }
        }
      }

      /*------------------------------------*/

      if(word.charAt(0) === 'b')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 3936; i < 4797; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 4798; i < 5248; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 5249; i < 5744; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 5745; i < 5844; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 5845; i < 6481; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 6482; i < 7371; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 7372; i < 8166; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 8167; i < 8860; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 8861; i < 9063; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-----------------------------------*/

      if(word.charAt(0) === 'd')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 9064; i < 9549; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 9550; i < 9785; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 9786; i < 10047; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 10048; i < 10105; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 10117; i < 10488; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 10489; i < 10968; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 10106; i < 10116; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'v')
        {
          for (let i = 11437; i < 11488; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 11489; i < 11736; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*---------------------------------------*/

      if(word.charAt(0) === 'e')
      {
        if(word.charAt(1) === 'd' || word.charAt(1) === 'ð')
        {
          for (let i = 11737; i < 11763; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'f')
        {
          for (let i = 11764; i < 11767; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'g')
        {
          for (let i = 11768; i < 11863; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 11864; i < 12188; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'k')
        {
          for (let i = 12189; i < 12254; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 12255; i < 12528; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'm')
        {
          for (let i = 12529; i < 12557; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'n')
        {
          for (let i = 12558; i < 12624; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'p')
        {
          for (let i = 12625; i < 12668; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 12669; i < 12835; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 's')
        {
          for (let i = 12836; i < 12904; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 't')
        {
          for (let i = 12905; i < 12959; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'v')
        {
          for (let i = 12960; i < 13033; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 13034; i < 13304; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'f')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 13305; i < 13920; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 13921; i < 14330; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 14331; i < 14795; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 14796; i < 15057; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 15058; i < 15779; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'n')
        {
          for (let i = 15780; i < 15790; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 15791; i < 16557; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 16558; i < 17284; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 17285; i < 17550; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 17551; i < 17776; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'g')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 17777; i < 18346; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 18347; i < 18690; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 18691; i < 19040; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 19041; i < 19170; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 19171; i < 19684; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'n')
        {
          for (let i = 19685; i < 19762; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 19763; i < 20294; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 20295; i < 21196; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 21197; i < 21402; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'v')
        {
          for (let i = 21403; i < 21410; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 21411; i < 21501; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'h')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 21502; i < 22899; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 22900; i < 23641; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 23642; i < 23947; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 23948; i < 24158; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 24159; i < 25133; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 25134; i < 25660; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'v')
        {
          for (let i = 25661; i < 26009; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 26010; i < 26181; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'i' || word.charAt(0) === 'í')
      {
        if(word.length === 1 && wordsFromDictionary[26182] === word)
        {
          return true;
        }
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
            if(wordsFromDictionary[26183] === word)
            {
              return true;
            }
        }
        if(word.charAt(1) === 'b')
        {
          for (let i = 26184; i < 26255; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'd' || word.charAt(1) === 'ð')
        {
          for (let i = 26256; i < 26346; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 26347; i < 26350; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'f')
        {
          for (let i = 26351; i < 26364; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'g')
        {
          for (let i = 26365; i < 26446; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'h')
        {
          for (let i = 26447; i < 26464; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'k')
        {
          for (let i = 26465; i < 26492; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 26493; i < 26767; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'm')
        {
          for (let i = 26768; i < 26843; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'n')
        {
          for (let i = 26844; i < 27068; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 27069; i < 27071; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'p')
        {
          for (let i = 27072; i < 27079; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 27080; i < 27165; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 's')
        {
          for (let i = 27166; i < 27458; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 't')
        {
          for (let i = 27459; i < 27508; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'v')
        {
          for (let i = 27509; i < 27577; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'j')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 27578; i < 27888; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 27889; i < 27926; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
            if(wordsFromDictionary[27927] === word)
            {
              return true;
            }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 27928; i < 28113; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 28114; i < 28201; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'k')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 28202; i < 29061; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 29062; i < 29507; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'h')
        {
            if(wordsFromDictionary[29508] === word)
            {
              return true;
            }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 29509; i < 29826; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 29827; i < 29991; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 29992; i < 30697; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'm')
        {
          if(wordsFromDictionary[30698] === word)
          {
            return true;
          }
        }
        if(word.charAt(1) === 'n')
        {
          for (let i = 30699; i < 31257; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 31258; i < 32170; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 32171; i < 32870; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 32871; i < 33344; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'v')
        {
          for (let i = 33345; i < 33745; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 33746; i < 34002; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'l')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 34003; i < 34837; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 34838; i < 35476; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 35477; i < 36342; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 36343; i < 36473; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 36474; i < 37379; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 37380; i < 37822; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 37823; i < 38135; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'm')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 38136; i < 39182; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 39183; i < 39650; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 39651; i < 40115; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 40116; i < 40242; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 40243; i < 41029; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 41030; i < 41416; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 41417; i < 41667; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'n')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 41668; i < 42196; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 42197; i < 42592; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 42593; i < 42843; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 42844; i < 42891; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 42892; i < 43281; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 43282; i < 43379; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 43380; i < 43688; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'o' || word.charAt(0) === 'ó' || word.charAt(0) === 'ø')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 43689; i < 43746; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'b')
        {
          for (let i = 43747; i < 43886; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'd' || word.charAt(1) === 'ð')
        {
          for (let i = 43887; i < 44105; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 44106; i < 44138; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'f')
        {
          for (let i = 44139; i < 44339; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'g')
        {
          for (let i = 44340; i < 44528; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'h')
        {
          for (let i = 44529; i < 44678; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 44679; i < 44682; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 44683; i < 44694; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'k')
        {
          for (let i = 44695; i < 44952; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 44953; i < 45263; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'm')
        {
          for (let i = 45264; i < 45396; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'n')
        {
          for (let i = 45397; i < 45603; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 45604; i < 45612; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'p')
        {
          for (let i = 45613; i < 45722; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 45723; i < 46344; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 's')
        {
          for (let i = 46345; i < 46792; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 't')
        {
          for (let i = 46793; i < 47060; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 47061; i < 47062; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'v')
        {
          for (let i = 47063; i < 47489; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 47490; i < 47637; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'p')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 47638; i < 47926; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 47927; i < 48175; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 48176; i < 48641; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 48642; i < 48720; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 48721; i < 48924; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 48925; i < 49170; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 49171; i < 49560; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 's')
        {
            if(wordsFromDictionary[49561] === word)
            {
              return true;
            }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 49562; i < 49853; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 49854; i < 49891; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'r')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 49892; i < 50896; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 50897; i < 51478; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'h')
        {
          if(wordsFromDictionary[51479] === word)
          {
            return true;
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 51480; i < 52153; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 52154; i < 52159; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 52160; i < 53061; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 53062; i < 53614; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 53615; i < 53767; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 's')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 53768; i < 54683; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 54684; i < 55223; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'f')
        {
          for (let i = 55224; i < 55226; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'h')
        {
          for (let i = 55227; i < 55230; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 55231; i < 55809; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 55810; i < 56291; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'k')
        {
          for (let i = 56292; i < 58392; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 58393; i < 59203; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'm')
        {
          for (let i = 59204; i < 59721; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'n')
        {
          for (let i = 59722; i < 60357; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 60358; i < 61103; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'p')
        {
          for (let i = 61104; i < 61900; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 't')
        {
          for (let i = 61901; i < 63519; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 63520; i < 63987; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'v')
        {
          for (let i = 63988; i < 64561; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 64562; i < 64851; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 't')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 64852; i < 65590; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 65591; i < 66101; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 66102; i < 66584; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 66585; i < 66745; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 66746; i < 67682; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 67683; i < 68784; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 68785; i < 69173; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'v')
        {
          for (let i = 69174; i < 69519; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 69520; i < 69809; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'u' || word.charAt(0) === 'ú')
      {
        if(word.charAt(1) === 'd' || word.charAt(1) === 'ð')
        {
          for (let i = 69810; i < 69812; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'f')
        {
          if(wordsFromDictionary[69813] === word)
          {
            return true;
          }
        }
        if(word.charAt(1) === 'g')
        {
          for (let i = 69814; i < 69850; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'k')
        {
          for (let i = 69851; i < 69853; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 69854; i < 69965; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'm')
        {
          for (let i = 69966; i < 70313; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'n')
        {
          for (let i = 70314; i < 70421; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'p')
        {
          for (let i = 70422; i < 70633; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 70634; i < 70823; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 's')
        {
          for (let i = 70824; i < 70825; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 't')
        {
          for (let i = 70826; i < 71575; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'v')
      {
        if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 71576; i < 72752; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 72753; i < 73515; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 73516; i < 74397; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 74398; i < 74739; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 74740; i < 74789; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 74790; i < 74809; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }

      /*-------------------------------------*/

      if(word.charAt(0) === 'y' || word.charAt(0) === 'ý')
      {
        if(word.charAt(1) === 'd' || word.charAt(1) === 'ð')
        {
          for (let i = 74810; i < 74832; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 74833; i < 74884; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'm')
        {
          for (let i = 74885; i < 74913; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'n')
        {
          for (let i = 74914; i < 75009; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'p')
        {
          for (let i = 75010; i < 75020; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 75021; i < 75045; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 's')
        {
          for (let i = 75046; i < 75060; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 't')
        {
          for (let i = 75061; i < 75103; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'v')
        {
          for (let i = 75104; i < 75157; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
      }
      
      return false;
    }
    return;
}
export default isWordInDirectory;
/*
if(word.charAt(1) === 'a' || word.charAt(1) === 'á' || word.charAt(1) === 'æ')
        {
          for (let i = 0; i < 3935; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'b')
        {
          for (let i = 3936; i < 9063; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'd' || word.charAt(1) === 'ð')
        {
          for (let i = 9064; i < 11736; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'e')
        {
          for (let i = 11737; i < 13304; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'f')
        {
          for (let i = 13305; i < 17776; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'g')
        {
          for (let i = 17777; i < 21501; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'h')
        {
          for (let i = 21502; i < 26182; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'i' || word.charAt(1) === 'í')
        {
          for (let i = 26183; i < 27578; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'j')
        {
          for (let i = 27579; i < 28202; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'k')
        {
          for (let i = 28203; i < 34003; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'l')
        {
          for (let i = 34004; i < 38138; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'm')
        {
          for (let i = 38139; i < 41673; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'n')
        {
          for (let i = 41674; i < 43694; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'o' || word.charAt(1) === 'ó' || word.charAt(1) === 'ø')
        {
          for (let i = 43695; i < 47643; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'p')
        {
          for (let i = 47644; i < 49898; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'r')
        {
          for (let i = 49899; i < 53774; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 's')
        {
          for (let i = 53775; i < 64858; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 't')
        {
          for (let i = 64859; i < 69816; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'u' || word.charAt(1) === 'ú')
        {
          for (let i = 69817; i < 71582; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'v')
        {
          for (let i = 71583; i < 74816; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        if(word.charAt(1) === 'y' || word.charAt(1) === 'ý')
        {
          for (let i = 74817; i < 75164; i++) {
            if(wordsFromDictionary[i] === word)
            {
              return true;
            }
          }
        }
        */