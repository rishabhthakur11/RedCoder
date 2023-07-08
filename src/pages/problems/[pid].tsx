import React from "react";
import { problems } from "@/utilities/problems";
import { Problem } from "@/utilities/types/problem";
import useHasMounted from "@/hooks/useHasMounted";
import { Header } from "@/components/Header";
import Workspace from "@/components/Workspace/Workspace";

type ProblemPageProps = {
  problem: Problem;
};

const problemPage = ({ problem }: ProblemPageProps) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <div>
      <div className="sticky top-0 z-50 bg-mildBrown pt-3 pb-3 lg:p-3">
        <Header problemPage={true} />
      </div>
	  <Workspace problem={problem} />
    </div>
  );
};

export default problemPage;

// fetch the local data
//  SSG
// getStaticPaths => it create the dynamic routes
export async function getStaticPaths() {
  const paths = Object.keys(problems).map((key) => ({
    params: { pid: key },
  }));

  return {
    paths,
    fallback: false,
  };
}

// getStaticProps => it fetch the data

export async function getStaticProps({ params }: { params: { pid: string } }) {
  const { pid } = params;
  const problem = problems[pid];

  if (!problem) {
    return {
      notFound: true,
    };
  }
  problem.handlerFunction = problem.handlerFunction.toString();
  return {
    props: {
      problem,
    },
  };
}
