import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select,SelectContent,SelectItem,SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

function Commonform({ formControls, formData, setFormData, onSubmit, buttonText }) {
    const renderInputByComponentType = (controlItem) => {
        const value = formData[controlItem.name] || '';

        switch (controlItem.componentType) {
            case 'input':
                return (
                    <Input
                        className='text-black'
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        id={controlItem.name}
                        type={controlItem.type}
                        value={value}
                        onChange={(e) => setFormData({
                            ...formData,
                            [controlItem.name]: e.target.value
                        })}
                    />
                );

            case "select":
                return (
                    <Select
                        value={formData[controlItem.name] || ""}
                        onValueChange={(selectedValue) =>
                            setFormData({
                                ...formData,
                                [controlItem.name]: selectedValue,
                            })
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder={controlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="admin">Saller</SelectItem>
                            <SelectItem value="user">User</SelectItem>
                        </SelectContent>
                    </Select>
                );

            case 'textarea':
                return (
                    <Textarea
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        id={controlItem.id}
                        value={value}
                        onChange={(e) => setFormData({
                            ...formData,
                            [controlItem.name]: e.target.value
                        })}
                    />
                );

            default:
                return (
                    <Input
                        className='text-black'
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        id={controlItem.name}
                        type={controlItem.type}
                        value={value}
                        onChange={(e) => setFormData({
                            ...formData,
                            [controlItem.name]: e.target.value
                        })}
                    />
                );
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3 ">
                {formControls.map((controlItem) => (
                    <div className="grid w-full gap-1.5 text-zinc-700 " key={controlItem.name}>
                        <Label className="mb-1">{controlItem.label}</Label>
                        {renderInputByComponentType(controlItem)}
                    </div>
                ))}
            </div>
            <Button type="submit" className="mt-2 w-full hover:overflow-hidden">
                {buttonText || 'Submit'}
            </Button>
        </form>
    );
}

export default Commonform;
