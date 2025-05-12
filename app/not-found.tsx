import Button from '@/components/UI/Button';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! Page not found.</p>
      <Button href="/" color="red">
        Go back to Home
      </Button>
    </div>
  );
}
