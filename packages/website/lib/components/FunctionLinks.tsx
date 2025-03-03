import { getCurrentDomain, getFullCurrentDomain, getFullDomain } from 'lib/utils';
import Link from 'lib/components/Link';

type FunctionLinksProps = {
  func: {
    name: string;
    domains: string[];
  };
};

const FunctionLinks = ({ func }: FunctionLinksProps) => {
  return (
    <div className="flex gap-4">
      <Link href={getFullCurrentDomain(func)} target="_blank">
        {getCurrentDomain(func)}
      </Link>
      {func.domains.map(domain => (
        <Link key={domain} href={getFullDomain(domain)} target="_blank">
          {domain}
        </Link>
      ))}
    </div>
  );
};

export default FunctionLinks;
