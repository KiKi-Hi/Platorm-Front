import React from 'react';
import { Link } from 'react-router-dom';

export default function StorybookLink() {
    return (
        <div>
            <Link to="/storybook">📖 Storybook 보기</Link>
        </div>
    );
}