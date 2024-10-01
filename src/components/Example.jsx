import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

function LanguageForm() {
  const { control, handleSubmit, watch, setValue, register } = useForm();
  const [isOther, setIsOther] = useState(false);

  // Watch for the selected language
  const selectedLanguage = watch('language');

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  // Update the state based on selected language
  useEffect(() => {
    if (selectedLanguage === 'Other') {
      setIsOther(true);
      setValue('other-language', ''); // Clear any previous value
    } else {
      setIsOther(false);
      setValue('other-language', ''); // Clear the value if not 'Other'
    }
  }, [selectedLanguage, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 mb-40 space-y-4">
      <div>
        <label htmlFor="language" className="block text-sm font-medium text-gray-700">
          Select a language:
        </label>
        {isOther ? (
          <input
            {...register('language')}
            type="text"
            placeholder="Type here"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        ) : (
          <Controller
            name="language"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Please select a value</option>
                <option value="Urdu">Urdu</option>
                <option value="Hindi">Hindi</option>
                <option value="Arabic">Arabic</option>
                <option value="Bengali">Bengali</option>
                <option value="Other">Other</option>
              </select>
            )}
          />
        )}
      </div>

      {isOther && (
        <div>
          <label htmlFor="other-language" className="block text-sm font-medium text-gray-700">
            Please specify:
          </label>
          <input
            {...register('other-language')}
            type="text"
            placeholder="Type here" // Ensure placeholder is set
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      )}

    </form>
  );
}

export default LanguageForm;
