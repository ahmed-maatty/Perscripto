import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import docImage from "/assets/doct_image.svg";

interface IForm {
  username: string;
  email: string;
  password: string;
  speciality: string;
  education: string;
  experience: string;
  fees: string;
  about: string;
  image: FileList;
}

type FormInputs = {
  labelTxt: string;
  inputPlaceHolder: string;
  inputName: keyof IForm;
  inputRequiredMsg: string;
  inputType: string;
};

function AddDoctor() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const Inputs: FormInputs[] = [
    {
      labelTxt: "Doctor Name",
      inputPlaceHolder: "Doctor Name",
      inputName: "username",
      inputRequiredMsg: "Doctor Name Is Required",
      inputType: "text",
    },
    {
      labelTxt: "Doctor Email",
      inputPlaceHolder: "Doctor Email",
      inputName: "email",
      inputRequiredMsg: "Email Is Required",
      inputType: "email",
    },
    {
      labelTxt: "Password",
      inputPlaceHolder: "Password",
      inputName: "password",
      inputRequiredMsg: "Password Is Required",
      inputType: "text",
    },
    {
      labelTxt: "Education",
      inputPlaceHolder: "Doctor Education",
      inputName: "education",
      inputRequiredMsg: "Education Is Required",
      inputType: "text",
    },
    {
      labelTxt: "Speciality",
      inputPlaceHolder: "Doctor Speciality",
      inputName: "speciality",
      inputRequiredMsg: "Doctor Speciality Is Required",
      inputType: "text",
    },
    {
      labelTxt: "Experience",
      inputPlaceHolder: "Experience",
      inputName: "experience",
      inputRequiredMsg: "Doctor Experience Is Required",
      inputType: "text",
    },
    {
      labelTxt: "Fees",
      inputPlaceHolder: "Fees",
      inputName: "fees",
      inputRequiredMsg: "Doctor Fees Is Required",
      inputType: "text",
    },
    {
      labelTxt: "About",
      inputPlaceHolder: "About",
      inputName: "about",
      inputRequiredMsg: "Doctor About Is Required",
      inputType: "text",
    },
  ];

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();


  const onSubmit: SubmitHandler<IForm> = (data: IForm) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <section className="Add_Doctor_Section w-full h-full p-8">
      <h1 className="font-semibold text-xl uppercase subtitle mb-4">
        Add doctor
      </h1>
      <div className="add_doc_inputs p-8">
        <form action="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="upload_img_container w-full flex flex-col items-center justify-center">
            <label htmlFor="image" className="cursor-pointer">
              <img src={imagePreview ?? docImage} alt="doctor image" />
              <p className="capitalize py-2 text-center">doctor image</p>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Image is required",
                onChange: (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  setImagePreview(URL.createObjectURL(file));
                },
              })}
              id="image"
            />
          </div>
          <div className="inputs_conainer flex flex-wrap items-center justify-evenly w-full gap-4">
            {Inputs.map((input, idx) => (
              <div className="input_parent flex flex-col gap-2" key={idx}>
                {input.inputName !== "about" ? (
                  <>
                    <label htmlFor={input.inputName}>{input.labelTxt}</label>
                    <input
                      type={input.inputType}
                      placeholder={input.inputPlaceHolder}
                      {...register(input.inputName, {
                        required: input.inputRequiredMsg,
                      })}
                    />
                  </>
                ) : (
                  <>
                    <label htmlFor={input.inputName}>{input.labelTxt}</label>
                    <textarea
                      placeholder={input.inputPlaceHolder}
                      {...register(input.inputName, {
                        required: input.inputRequiredMsg,
                      })}
                    ></textarea>
                  </>
                )}
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="add_doc_btn capitalize py-2 px-8 cursor-pointer mt-8"
          >
            add doctor
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddDoctor;