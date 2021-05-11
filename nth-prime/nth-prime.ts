export default class Prime {
  nth(num: number): number {
    if (num < 1) throw new Error("Prime is not possible");

    const primes = [2];

    const isPrime = (n: number): boolean => {
      // at least one factor of n needs to be less than the square root of n
      // this makes it sufficient to check only to the square root of n
      // https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-prime-number-to-determine-if-it-is-pr
      const limit = Math.ceil(Math.sqrt(n));
      let i = 1, p = primes[i];
      while (p <= limit) {
        if (n % p === 0) return false;
        i++;
        p = primes[i];
      }
      return true;
    }

    // starting prime number
    let n = 3;
    // we nee the nth prime, which corresponds with num. 
    // fill array with primes until we have "num" primes, then return the last
     while (primes.length < num) {
      while (!isPrime(n)) {
         n += 2;
      }
      primes.push(n);
      n += 2;
    }
    return primes[num-1];
  }
}

