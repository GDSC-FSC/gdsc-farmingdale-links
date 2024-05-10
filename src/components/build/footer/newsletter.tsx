import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from 'react-hook-form'
import { useForm } from "react-hook-form"
import { sendEmail, TSendEmail } from "@/src/schema/send-emails";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Div } from "../../templates";
import { Label } from "@/src/components/ui/label";
export const NewsLetter = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TSendEmail>({
    defaultValues: {
      email: ''
    },
    resolver: zodResolver(sendEmail)
  });

  const onSubmit: SubmitHandler<TSendEmail> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col items-center justify-center`}
    >
      <Label htmlFor={"UserEmail"} className={`sr-only`}>Email address</Label>
      <Div
        className="flex flex-row items-center justify-center "
      >

        <Input id={"UserEmail"} placeholder={`Email address`} {...register("email")} type={`email`} className={` rounded-r-none w-36`} />
        <Button type={`submit`} className={`rounded-l-none`}>Subscribe</Button>
      </Div>
      {
        errors.email && (
          <p
            className={``}
          >
          {errors.email.message}</p>)
      }
    </form>
  );
};

