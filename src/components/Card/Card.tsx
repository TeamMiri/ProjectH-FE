import { CardContainer, Card } from './styled';
import Button from 'react-bootstrap/Button';
import { CardType } from './types';

export interface CommonCardProps {
  cardType: CardType;
  title: string;
  subtitle: string;
  desc: string;
  imageUrl: string;
}
export function CommonCard({
  cardType,
  title,
  subtitle,
  desc,
  imageUrl,
}: CommonCardProps) {
  return (
    <CardContainer>
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>{desc}</Card.Text>
          <Button variant="primary">상세정보</Button>
        </Card.Body>
      </Card>
    </CardContainer>
  );
}
