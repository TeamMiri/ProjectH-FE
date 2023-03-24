import Badge from 'react-bootstrap/Badge';

interface PillProps {
  name: string;
}

export function Pill({ name }: PillProps) {
  return (
    <div>
      <Badge pill bg="primary" style={{ marginRight: '10px' }}>
        {name}
      </Badge>
    </div>
  );
}
//https://react-bootstrap.github.io/components/badge/
