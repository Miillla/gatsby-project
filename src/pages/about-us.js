import React from "react";
import Layout from "../components/Layout";
import AboutUsEmployeeCard from "../components/AboutUsEmployeeCard";

const AboutUsPage = () => {
  return (
    <Layout>
      {/* <!-- Team Section: Large Photos With Details --> */}
      <div class="bg-white">
        <div class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* <!-- Heading --> */}
          <div class="text-center">
            <div class="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
              Amazing Team
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
              The people under the hood
            </h2>
            <h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
              They are working nonstop behind the scenes to help you build
              better products, web services and websites.
            </h3>
          </div>
          {/* <!-- END Heading --> */}

          {/* <!-- Team --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <AboutUsEmployeeCard
              name="Irma Norton"
              title="Founder & CEO"
              image="https://source.unsplash.com/nHoaFkrJEx4/740x740"
              message=" Nam commodo turpis id lectus scelerisque vulputate. Integer sed dolor
    erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus?
    Etiam egestas fringilla enim, id convallis lectus laoreet at."
            />

            <AboutUsEmployeeCard
              name="Alejandro Lee"
              title="Product Design"
              image="https://source.unsplash.com/Nm70URdtf3c/740x740"
              message="Nam commodo turpis id lectus scelerisque vulputate. Integer sed
            dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique
            et lectus? Etiam egestas fringilla enim, id convallis lectus
            laoreet at."
            />
            <AboutUsEmployeeCard
              name="Elsa King"
              title="Web Developer"
              image="https://source.unsplash.com/mEZ3PoFGs_k/740x740"
              message="Nam commodo turpis id lectus scelerisque vulputate. Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus? Etiam egestas fringilla enim, id convallis lectus laoreet at."
            />
            <AboutUsEmployeeCard
              name="Alex Saunders"
              title="Marketing"
              image="https://source.unsplash.com/sibVwORYqs0/740x740"
              message="Nam commodo turpis id lectus scelerisque vulputate. Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus? Etiam egestas fringilla enim, id convallis lectus laoreet at."
            />
            <AboutUsEmployeeCard
              name="Herman Reese"
              title="Support Specialist"
              image="https://source.unsplash.com/euZ2n8dGUcQ/740x740"
              message="Nam commodo turpis id lectus scelerisque vulputate. Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus? Etiam egestas fringilla enim, id convallis lectus laoreet at."
            />
            <AboutUsEmployeeCard
              name="Sue Keller"
              title="Web Developer"
              image="https://source.unsplash.com/DLKR_x3T_7s/740x740"
              message="Nam commodo turpis id lectus scelerisque vulputate. Integer sed dolor erat. Fusce erat ipsum, varius vel euismod sed, tristique et lectus? Etiam egestas fringilla enim, id convallis lectus laoreet at."
            />
          </div>
          {/* <!-- END Team --> */}
        </div>
      </div>
      {/* <!-- END Team Section: Large Photos With Details --> */}
    </Layout>
  );
};

export default AboutUsPage;
