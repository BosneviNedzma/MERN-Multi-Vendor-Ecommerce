import ToggleInput from "@/components/FormInputs/ToggleInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import TextInput from "@/components/FormInputs/TextInputs";
import React, { useState } from "react";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { useForm } from "react-hook-form";
import { makePostRequest } from "@/lib/apiRequest";
import FormHeader from "@/components/backoffice/FormHeader";
import { Watch } from "lucide-react";

export default function NewBanner() {
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const {
        register,
        reset,
        Watch,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues:{
            isActive:true,
        }
    });
    const isActive = Watch("isActive");
    async function onSubmit(data){
        {
            /*
            -id => auto()
            -title
            -link
            -image
            */
        }
        data.imageUrl = imageUrl;
        makePostRequest(setLoading, "api/banners", data, "Banner", reset);
        setImageUrl("");
    }
  return (
    <div>
        <FormHeader title="New Banner" />
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 
        md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput 
            label="Banner Title"
            name="title"
            register={register}
            errors={errors}
            />
      <TextInput
        label="Banner Link"
        name="link"
        type="url"
        register={register}
        errors={errors}
      />

      <ImageInput
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        endpoint="bannerImageUploader"
        label="Banner Image"
      />
      <ToggleInput
        label="Publish your Banner"
        name="isActive"
        trueTitle="Active"
        falseTitle="Draft"
        register={register}
      /> 
    </div>
    <SubmitButton 
    isLoading={loading}
    buttonTitle="Create Banner"
    loadingButtonTitle="Creating Banner please wait..."
    />
    </form>
    </div>
  );
}