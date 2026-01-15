import { useForm, type SubmitHandler } from "react-hook-form";
import docImage from "/assets/doct_image.svg";
import createDoctor from "../../api/CreateDoc.ts";
import { useState } from "react";
import CloudinaryUpload from "../../api/CloudinaryUpload.ts";

interface IForm {
  username: string;
  email: string;
  password: string;
  speciality: string;
  degree: string;
  experience: string;
  fee: string;
  description: string;
  image: string;
}

type FormInputs = {
  labelTxt: string;
  inputPlaceHolder: string;
  inputName: keyof IForm;
  inputRequiredMsg: string;
  inputType: string;
};

function AddDoctor() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageURL] = useState<string>("");

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
      inputName: "degree",
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
      inputName: "fee",
      inputRequiredMsg: "Doctor Fees Is Required",
      inputType: "text",
    },
    {
      labelTxt: "About",
      inputPlaceHolder: "About",
      inputName: "description",
      inputRequiredMsg: "Doctor About Is Required",
      inputType: "text",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async (data: IForm) => {
    try {
      if (errors) {
        console.log(errors);
      }
      const image = await CloudinaryUpload(file);
      if (!image) return;
      setImageURL(image);
      await createDoctor({ ...data, image });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="Add_Doctor_Section w-full h-full p-8">
      <h1 className="font-semibold text-xl uppercase subtitle mb-4">
        Add doctor
      </h1>
      <div className="add_doc_inputs p-8">
        <form action="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="upload_img_container w-full flex flex-col items-center justify-center gap-3">
            <label htmlFor="image" className="cursor-pointer">
              <img src={imageUrl || docImage} alt="doctor image" width={200} />
              <p className="capitalize py-2 text-center">doctor image</p>
            </label>

            <input
              type="file"
              id="image"
              accept="image/*"
              hidden
              {...register("image", {
                onChange: (e) => {
                  const selectedFile = e.target.files?.[0];
                  if (selectedFile) setFile(selectedFile);
                },
              })}
            />
          </div>
          <div className="inputs_conainer flex flex-wrap items-center justify-evenly w-full gap-4">
            {Inputs.map((input, idx) => (
              <div className="input_parent flex flex-col gap-2" key={idx}>
                {input.inputName !== "description" ? (
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
