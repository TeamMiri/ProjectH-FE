import Badge, { BadgeProps } from 'react-bootstrap/Badge';

interface PillProps extends BadgeProps {
  name: string;
}

export function Pill({ name, ...props }: PillProps) {
  return (
    <div>
      <Badge {...props} pill bg="primary" style={{ marginRight: '10px' }}>
        {name}
      </Badge>
    </div>
  );
}
//https://react-bootstrap.github.io/components/badge/
