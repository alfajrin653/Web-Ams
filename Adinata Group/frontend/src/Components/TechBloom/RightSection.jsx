import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";

const RightSection = ({ description, method, benefits, whyChooseUs }) => {
  const [openBenefitIndex, setOpenBenefitIndex] = useState(null);
  const [openWhyIndex, setOpenWhyIndex] = useState(null);

  const handleBenefitToggle = (index) => {
    setOpenBenefitIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleWhyToggle = (index) => {
    setOpenWhyIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!description && !method && !benefits && !whyChooseUs) return null;

  return (
    <div className="md:w-1/2 flex flex-row items-center p-6">
      <div className="flex flex-col">
        {/* Method Section */}
        {method && (
          <div className="flex flex-col justify-center m-4 bg-opacity-50 bg-white rounded-3xl max-w-[795px] max-h-[219px] overflow-y-auto">
            <h3 className="font-bold text-primary p-5">Method</h3>
            {description && (
              <div className="p-5 pt-3 text-base font-medium text-left text-[16px] md:text-[18px] max-h-[200px] max-w-[575px] lg:max-h-[240px] overflow-y-auto">
                <p className="text-primary text-center">{description}</p>
              </div>
            )}
            <textarea className="w-full p-2 text-gray-800" />
          </div>
        )}

        {/* Benefit Section */}
        {benefits && (
          <div className="mt-4">
            <h3 className="font-bold text-white">Benefit</h3>
            <div className="flex flex-wrap gap-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="w-full md:w-auto border-2 border-white text-white rounded-md p-3">
                  <button
                    onClick={() => handleBenefitToggle(index)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span>{benefit.title}</span>
                    <SlArrowDown
                      className={`ml-2 transition-transform duration-300 ${
                        openBenefitIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openBenefitIndex === index && (
                    <div className="mt-2 text-sm text-white">
                      {benefit.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Why Choose Us Section */}
        {whyChooseUs && (
          <div className="mt-4">
            <h3 className="font-bold text-white">Why Choose Us?</h3>
            <div className="flex flex-wrap gap-2">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="w-full md:w-auto border-2 border-white text-white rounded-md p-3"
                >
                  <button
                    onClick={() => handleWhyToggle(index)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span>{reason.title}</span>
                    <SlArrowDown
                      className={`ml-2 transition-transform duration-300 ${
                        openWhyIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openWhyIndex === index && (
                    <div className="mt-2 text-sm text-white">
                      {reason.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSection;
