export default function TextInputGroup({type, name, labelValue, placeholder, value, onChange}) {
    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="block text-gray-700 font-bold mb-2"
            >
                {labelValue || name}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder || ''}
                value={value}
                onChange={onChange}
                required
                className="w-full border border-slate-300 p-2 rounded focus:outline-none focus:border-indigo-600"
            />
        </div>
    );
}