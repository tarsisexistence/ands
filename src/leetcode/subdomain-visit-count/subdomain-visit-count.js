/**
 * Leetcode #811
 * Difficulty: Easy
 * https://leetcode.com/problems/subdomain-visit-count/
 */
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
export const subdomainVisits = cpdomains => {
  const visitsEntity = {};
  const result = [];

  for (let i = 0; i < cpdomains.length; i += 1) {
    let [visits, domain] = cpdomains[i].split(' ');

    while (domain.length > 0) {
      recordDomain(visits, domain);
      const domainSeparatorId = domain.indexOf('.');
      domain = domainSeparatorId === -1 ? '' : domain.slice(domainSeparatorId + 1);
    }
  }

  const totalDomains = Object.keys(visitsEntity);

  for (let i = 0; i < totalDomains.length; i += 1) {
    const domain = totalDomains[i];
    result.push(`${visitsEntity[domain]} ${domain}`);
  }

  return result;

  function recordDomain(visits, domain) {
    visits = Number(visits);
    visitsEntity[domain] = visitsEntity[domain] === undefined ? visits : visitsEntity[domain] + visits;
  }
};
