"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  getXP,
  getLevel,
} from "@/lib/xp";

import {
  getCompletedLessons,
} from "@/lib/lessonProgress";

type StudentContextType = {
  xp: number;
  level: number;
  completedLessons: string[];
  refreshStudent: () => void;
};

const StudentContext =
  createContext<StudentContextType | null>(null);

export function StudentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [xp, setXP] = useState(0);

  const [level, setLevel] = useState(1);

  const [completedLessons, setCompletedLessons] =
    useState<string[]>([]);

  function refreshStudent() {
    const currentXP = getXP();

    setXP(currentXP);

    setLevel(getLevel(currentXP));

    setCompletedLessons(
      getCompletedLessons()
    );
  }

  useEffect(() => {
    refreshStudent();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        xp,
        level,
        completedLessons,
        refreshStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error(
      "useStudent must be used inside StudentProvider"
    );
  }

  return context;
}