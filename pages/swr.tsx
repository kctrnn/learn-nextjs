import { StudentDetail } from '@/components/swr';

function SWRPage() {
  return (
    <div>
      <h1>SWR Demo</h1>

      <ul>
        <li>
          <StudentDetail studentId="632e57e6-bd8f-4c51-bf73-f738e910c1bf" />
        </li>

        <li>
          <StudentDetail studentId="632e57e6-bd8f-4c51-bf73-f738e910c1bf" />
        </li>

        <li>
          <StudentDetail studentId="632e57e6-bd8f-4c51-bf73-f738e910c1bf" />
        </li>
      </ul>
    </div>
  );
}

export default SWRPage;
