import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from 'react-hook-form'
import { useForm } from "react-hook-form"
import { sendEmail, TSendEmail } from "@/src/schema/send-emails";
import { FormInput } from "../../form/form-input";
import { FormSubmit } from "../../form/form-submit";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput id={""} placeholder={`Email address`} {...register("email")} errors={errors.email} type={`email`}/>
      {/* type="submit" is not necessary since the submit handling is being  handled by the form element*/}
      <FormSubmit>
        Subscribe
      </FormSubmit>
    </form>
  );
};

