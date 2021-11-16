/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/
    Given to a Coding Dojo alumni by Riot games in 2021.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/

// 
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

function rehash(str) {
    let tempHash = {};
    for (let index = 0; index < str.length; index++) {
        if (isNaN(str[index])) {
            let x = index + 1;
            let val = "";
            while (!isNaN(str[x])) {
                val += str[x];
                x++;
            }
            if(tempHash[str[index]] == undefined) {
                tempHash[str[index]] = parseInt(val);
            } else {
                tempHash[str[index]] += parseInt(val);
            }
        }
    }

    tempHash = Object.keys(tempHash).sort().reduce((v, i) => {
        v[i] = tempHash[i];
        return v;
    }, {});

    let tempStr = "";
    for (const key in tempHash) {
        tempStr+=key + "" + tempHash[key];
    }
    
    return tempStr;
}

console.log(rehash(str1));

