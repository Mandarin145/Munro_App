import raw from './Munro.txt';
import { useState, useEffect } from "react";


export const MunroObjectMaker = async() => {
  // converting txt file into text that can be used
    return fetch(raw).then(
        r => r.text()).then(text => {
        const lines = text.split('\n');
      // console.log(lines[1]);
      // console.log(lines.length)

      // x=1 since first line of txt file are just headers
      let mObj = {}
      for (let x = 1; x < lines.length; x++) { 
        const words = lines[x].split(',');
        // console.log(words[4], words[4]);
        
        mObj[words[0]] =
          {Height_ft: words[1],
          Height_m: words[2],
          Lat: Number(words[3]),
          Long: Number(words[4]),
          Key: x
        }
      }

    // created dictionary of txt file and set it to munroObject variable
      // console.log(mObj)
      // if (mObj.length !== 281) alert('incorrect number of munros found')
      return mObj
    })
}