"use client";


import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, Check, Camera } from "lucide-react";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [initialized, setInitialized] = useState(false);


  useEffect(() => {
    if (session?.user && !initialized) {
      console.log("[UpdateProfile] useeffect: populating from session", {
        sessionName: session.user.name,
        sessionImage: session.user.image,
      });
      setName(session.user.name || "");
      setImage(session.user.image || "");
      setInitialized(true);
    }
  }, [session, initialized]);


  const handleUpdate = async () => {
    setSubmitting(true);
    try {
      await authClient.updateUser({ image, name });
      router.push("/my-profile");
    } catch {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-6 bg-base-100">
      <div className="w-full max-w-xl relative z-10 animate__animated animate__fadeInUp">

        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-base-content/40 hover:text-primary transition-colors group mb-12"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Cancel
        </button>

       
        <h1 className="text-5xl font-black tracking-tighter text-base-content mb-12">
          Update Persona.
        </h1>

      
        <div className="relative mb-10">
          <label className="absolute -top-3 left-0 text-xs font-bold tracking-[0.2em] uppercase text-base-content/50">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border-0 border-b-2 border-base-content/10 py-3 text-xl font-bold text-base-content focus:outline-none focus:border-primary focus:ring-0 transition-colors peer placeholder-transparent"
          />
        </div>

        <div className="relative mb-12">
          <label className="absolute -top-3 left-0 text-xs font-bold tracking-[0.2em] uppercase text-base-content/50">
            Profile Image URL
          </label>
          <input
            type="text"
            placeholder="https://example.com/yourpicture.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full bg-transparent border-0 border-b-2 border-base-content/10 py-3 text-xl font-bold text-base-content focus:outline-none focus:border-primary focus:ring-0 transition-colors peer placeholder-transparent"
          />
          <Camera className="absolute right-0 top-3 text-base-content/20" />
        </div>

        <button
          onClick={handleUpdate}
          disabled={isSubmitting}
          className="group flex w-full items-center justify-between bg-base-content text-base-100 px-6 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-500 shadow-xl disabled:opacity-50"
        >
          {isSubmitting ? "Updating..." : "Save Changes"}
          <Check
            size={18}
            className="group-hover:scale-125 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
