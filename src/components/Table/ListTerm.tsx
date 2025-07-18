import React from "react";
import Image from "next/image";
export default function ListTerm({ termsData }) {
    const renderSubTerms = (subTerms, level = 1, parentKey = '') => {
        if (!subTerms) return null;

        const getNumbering = (key, level) => {
            const termNumber = parseInt(key.replace('term', ''));
            if (level === 1) return `${termNumber}.`;
            if (level === 2) return ['a.', 'b.', 'c.', 'd.', 'e.'][termNumber - 1];
            if (level === 3) return ['a.', 'b.', 'c.', 'd.', 'e.'][termNumber - 1];
            return `${termNumber}.`;
        };

        return (
            <div className={`${level === 1 ? 'ml-6' : 'ml-4'} mt-3 space-y-3`}>
                {Object.entries(subTerms).map(([key, value]) => {
                    if (typeof value === 'string') {
                        return (
                            <div key={key} className="flex items-start gap-2">
                                <span className="text-[20px] font-medium min-w-[20px]">
                                    {getNumbering(key, level)}
                                </span>
                                <p className="text-[20px] leading-relaxed text-gray-700">
                                    {value}
                                </p>
                            </div>
                        );
                    } else if (value.content) {
                        return (
                            <div key={key} className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-[20px] font-medium min-w-[20px]">
                                        {getNumbering(key, level)}
                                    </span>
                                    <p className="text-[20px] leading-relaxed text-gray-700">
                                        {value.content}
                                    </p>
                                </div>
                                {value.subTerms && renderSubTerms(value.subTerms, level + 1, key)}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        );
    };
    return (
        <section className="mx-auto max-w-[1080px] min-h-screen rounded-[30px]">
             <div className="space-y-[50px]">
                    {Object.entries(termsData).map(([termKey, term]) => (
                        <div key={termKey} id={termKey} className="space-y-4">
                            {/* Term Title */}
                            <h2 className="text-[40px] font-bold text-center text-gray-800 mb-6">
                                {term.label}
                            </h2>

                            {/* Term Content */}
                            {term.content && (
                                <p className="text-[20px] leading-relaxed text-gray-700 mb-4">
                                    {term.content}
                                </p>
                            )}

                            {/* Sub Terms */}
                            {term.subTerms && renderSubTerms(term.subTerms)}
                        </div>
                    ))}
                </div>
        </section >
    )
}