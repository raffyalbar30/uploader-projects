
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { IoCloudUpload } from 'react-icons/io5';
import { IoCloudUploadOutline } from "react-icons/io5";




 const DialogDemo = () => (

 
  <Dialog.Root>
    <Dialog.Trigger asChild className='fixed bottom-5 right-8 '>
       <div className="bg-gray-700 p-3 rounded-full z-0">
          <IoCloudUpload className="text-2xl"/>
     </div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed z-10" />
      <Dialog.Content className=" z-10 data-[state=open]:animate-contentShow fixed mt-10 top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] bg-zinc-800 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
           Add your stories
        </Dialog.Title>
        <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
           long memories in your life save memories and tracking your proces growth
        </Dialog.Description>
        <fieldset className="mb-[15px] flex-wrap gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="name">
            Name
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="name"
            defaultValue="Raffy Albar"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex-wrap gap-5">
          <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="username">
          information
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="name"
            defaultValue="About your photos, and achive"
          />
        </fieldset>
        <div className='flex justify-center mt-4'>
          <div className='border-dashed border w-full flex-wrap p-4'>
            <label htmlFor="" className='cursor-pointer'>
              <IoCloudUploadOutline className='mx-auto text-4xl' />
              <input className='absolute h-16 flex justify-center opacity-0 cursor-pointer' type="file" name="" id="dragzone-file"/>
              <label htmlFor="" className='flex justify-center mt-2'><span className='font-semibold '>Click to upload </span> <span>or drag and drop</span></label>
              <label htmlFor="" className='flex justify-center'>SVG, PNG, JPG or GIF (MAX, 10MB)</label>
            </label>
          </div> 
        </div>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="bg-slate-600 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Save changes
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>

 );

export default DialogDemo;