import { Counter } from 'entities/Counter';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('')

    const onChange = (value: string) => {
        setValue(value)
    }

    return (
        <div>
            {t('Главная страница')}
            <Input onChange={onChange} value={value} placeholder={'Введите текст'} />
            <Counter />
        </div>
    );
};

export default MainPage;
