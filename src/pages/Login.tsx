import { Button } from "@/components/ui/button.tsx";
import { UserService } from "@/services/http/login";
import { useForm } from "react-hook-form";

function useLogin() {
  const { handleSubmit, register } = useForm();

  const handleSubmitData = async (data: any) => {
    await UserService.login({
      login: data.login,
      password: data.password,
    });
  };

  return {
    handleSubmitData,
    handleSubmit,
    register,
  };
}

export function Login() {
  const { handleSubmit, handleSubmitData, register } = useLogin();

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center p-10 bg-gray-900">
      <h1 className="text-center text-2xl text-white">
        Example apply DIP in Form
      </h1>
      <form
        className="shadow-lg shadow-gray-950  rounded-2xl p-10 w-full md:w-[400px] md:h-40 justify-center flex items-center flex-col gap-4"
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <input type="text" placeholder="Username" {...register("login")} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <Button type="submit" className="w-32" variant="secondary">
          Login
        </Button>
      </form>
    </main>
  );
}
