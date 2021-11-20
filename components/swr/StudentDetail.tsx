import useSWR from 'swr';

export interface StudentDetailProps {
  studentId: string;
}

export function StudentDetail({ studentId }: StudentDetailProps) {
  const { data, error, isValidating, mutate } = useSWR(`students/${studentId}`);

  const handleMutateClick = () => {
    mutate({ name: 'better now' }, true);
  };

  return (
    <div>
      Name: {data?.name || '---'} | <button onClick={handleMutateClick}>mutate</button>
    </div>
  );
}
