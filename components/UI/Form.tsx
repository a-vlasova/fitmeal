'use client';

import { ActionFunction, FormState } from '@/lib/types';
import { ReactNode } from 'react';
import { useActionState } from 'react';

const initState: FormState = {
  message: '',
};

const Form = ({
  action,
  children,
}: {
  action: ActionFunction;
  children: ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initState);

  return (
    <>
      <form action={formAction} className="flex flex-col gap-5">
        {children}
        {state.message && <p>{state.message}</p>}
      </form>
    </>
  );
};

export default Form;
