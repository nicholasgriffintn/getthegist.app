import { signIn } from 'next-auth/client';

export default function Login() {
  return (
    <div className="signInBlock">
      <p className="mt-10 mb-10">
        <a
          href="/api/auth/signin"
          onClick={e => {
            e.preventDefault();
            signIn('github');
          }}
          style={{
            textDecoration: 'none',
          }}
          className="py-4 px-6 bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full"
        >
          Sign In Now
        </a>
      </p>
    </div>
  );
}
