// Find the Town Judge
// In a town, there are n people labeled from 1 to n. 
// There is a rumor that one of thesepeople is secretly the town judge.
// If the town judge exists, then: 
// 1. The town judge trusts nobody. 
// 2. Everybody (except forthe town judge) trusts the town judge.
//  3. There is exactly one person that satisfiesproperties 1 and 2.
//  You are given an array trust where trust[i] = [ai, bi] representing that the person labeledai trusts the person labeled bi. 
//  Return the label of the town judge if the town judge existsand can be identified, or return -1 otherwise.

const findJudge = (N, trust) => {
    const p = new Array(N + 1).fill(0);
    for (let [i, j] of trust) {
      --p[i];
      ++p[j];
    }
    for (let i = 1; i < p.length; ++i) {
        if (p[i] === N - 1) {
            return i;
        }
    }
    return -1;
  }


  const n=3;
  const trust=[[1,3],[2,3]];
  console.log(findJudge(n,trust));
