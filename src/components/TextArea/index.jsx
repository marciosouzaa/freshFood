import { Container } from './styles';

export function Textarea({ title, value, ...rest }) {
  return (
    <Container>
      <label htmlFor="">{title}</label>
      <textarea {...rest}>{value}</textarea>
    </Container>
  );
}
