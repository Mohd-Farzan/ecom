import Commonform from '@/componant/common/form';
import { enquiryForm, registerFormControls } from '@/config';
import { EnquiryForm } from '@/store/enquiry-slice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialState = {
  email: '',
  userName:'',
  phone:'',
  message:'',

};

function Enquiry() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(EnquiryForm(formData)).then((data) => {
      if (data?.payload?.success) {
        alert("your data is submitted ! our team respose you soon")
      } else {
        toast.error(data.payload?.message || "there is some internal issues please try again later");
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6 shadow-lg border rounded-lg p-2">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Contact US</h1>
      </div>
      <marquee direction="left" className='bg-zinc-900 bg-opacity-30'>feel free to discuss anything...</marquee>
      <Commonform
        formControls={enquiryForm}
        buttonText={'Send'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Enquiry;
