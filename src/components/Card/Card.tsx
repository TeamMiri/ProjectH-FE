import { CardContainer, Card } from './styled';
import Button from 'react-bootstrap/Button';
import { CardType } from './types';
import Link from 'next/link';

export interface CommonCardProps {
  cardType: CardType;
  title: string;
  subtitle: string;
  desc: string;
  imageUrl: string;
  id: string;
}
export function CommonCard({
  cardType,
  title,
  subtitle,
  desc,
  imageUrl,
  id,
}: CommonCardProps) {
  return (
    <CardContainer>
      {cardType === 'project' ? (
        <Card>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {subtitle}
            </Card.Subtitle>
            <Link href={`/projects/${id}`}>
              <Button variant="primary">상세정보</Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {subtitle}
            </Card.Subtitle>
            <Link href={`/mypage/${id}`}>
              <Button variant="primary">자세히 보기</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </CardContainer>
  );
}
