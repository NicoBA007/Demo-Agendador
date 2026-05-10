import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppData } from '@/hooks/useAppData';
import { ArrowLeft } from 'lucide-react';
import { StepBar } from '@/components/booking/StepBar';
import { ServiceStep } from '@/components/booking/ServiceStep';
import { StaffStep } from '@/components/booking/StaffStep';
import { CalendarStep } from '@/components/booking/CalendarStep';
import { TimeStep } from '@/components/booking/TimeStep';
import { SummaryStep } from '@/components/booking/SummaryStep';
import { SuccessStep } from '@/components/booking/SuccessStep';
import { generateBookingLink } from '@/lib/whatsapp';

export const BookingPage = () => {
  const { business, services, staff } = useAppData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [step, setStep] = useState(1);
  const [data, setData] = useState({ service: null, staff: null, date: null, time: null, client: {} });

  const currentDemo = searchParams.get('demo') || 'barberia';
  const next = () => setStep(s => s + 1);
  const back = () => {
    if (step === 1 || step === 6) {
      navigate(`/?demo=${currentDemo}`);
    } else {
      setStep(s => s - 1);
    }
  };

  const handleConfirm = (clientData) => {
    const finalData = { ...data, client: clientData };
    window.open(generateBookingLink(finalData, business), '_blank');
    setStep(6);
  };

  if (!services) return null;

  return (
    <section className="min-h-screen bg-background pt-24 pb-12 px-6">
      <div className="mx-auto max-w-xl">
        <button onClick={back} className="group mb-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 transition-all hover:text-primary">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border/50 transition-all group-hover:border-primary group-hover:bg-primary/5">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          </div>
          <span>{step === 6 ? 'Cerrar agendador' : 'Regresar al paso anterior'}</span>
        </button>

        <div className="rounded-3xl border border-border bg-card p-10">
          <StepBar current={step > 5 ? 5 : step} total={5} />
          {step === 1 && <ServiceStep categories={services} onSelect={s => { setData({ ...data, service: s }); next(); }} />}
          {step === 2 && <StaffStep staff={staff} onSelect={st => { setData({ ...data, staff: st }); next(); }} />}
          {step === 3 && <CalendarStep onSelect={d => { setData({ ...data, date: d }); next(); }} />}
          {step === 4 && <TimeStep onSelect={t => { setData({ ...data, time: t }); next(); }} />}
          {step === 5 && <SummaryStep selection={data} onConfirm={handleConfirm} />}
          {step === 6 && <SuccessStep />}
        </div>
      </div>
    </section>
  );
};