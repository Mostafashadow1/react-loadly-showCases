"use client";

import { AutoSkeletonLoader } from "react-loadly";
import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Users, BookOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

interface UserProfileData {
  name: string;
  email: string;
  role: string;
  avatar: string;
  status: string;
}
interface ProductData {
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  image: string;
}
interface ArticleData {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  featuredImage: string;
  tags: string[];
}

function CopySnippetButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // ignore
    }
  }
  return (
    <button
      onClick={onCopy}
      aria-label="Copy snippet"
      className="ml-3 inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

const ProfileCard = ({ user }: { user: UserProfileData }) => (
  <Card className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-card ">
    <CardContent className="p-6 text-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="space-y-4"
      >
        <img
          src={user.avatar}
          alt={user.name}
          className="rounded-full w-24 h-24 object-cover mx-auto border-4 border-white/10 shadow-lg"
        />
        <h3 className="text-xl font-semibold text-white">{user.name}</h3>
        <p className="text-muted-foreground">{user.role}</p>
        <p className="text-sm text-gray-400">{user.email}</p>
        <Badge className="mt-3 bg-gradient-to-r from-indigo-400 to-purple-500 text-white shadow-sm">
          {user.status}
        </Badge>
      </motion.div>
    </CardContent>
  </Card>
);

const ProductCard = ({ product }: { product: ProductData }) => (
  <Card className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-card">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground shadow">
          {product.category}
        </Badge>
      </div>

      <CardHeader className="p-4">
        <CardTitle className="text-lg text-white">{product.name}</CardTitle>
        <CardDescription className="text-sm text-gray-400">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 pb-3 flex items-center justify-between">
        <span
          className="text-2xl font-bold bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          ${product.price}
        </span>
        <div className="flex items-center space-x-1 text-yellow-400">
          <span>★</span>
          <span className="text-sm">{product.rating}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          style={{ backgroundImage: "var(--gradient-hero)" }}
          className="w-full text-white"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </motion.div>
  </Card>
);

const ArticleCard = ({ article }: { article: ArticleData }) => (
  <Card className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-card">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <img
        src={article.featuredImage}
        alt={article.title}
        className="w-full h-44 object-cover rounded-t-2xl"
      />
      <CardHeader className="p-4">
        <CardTitle className="text-lg text-white">{article.title}</CardTitle>
        <CardDescription className="text-sm text-gray-400">
          By {article.author} • {article.date}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4">
        <p className="text-gray-300">{article.excerpt}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {article.tags.map((t, i) => (
            <Badge
              key={i}
              className="bg-gradient-to-r from-indigo-400 to-blue-500 text-white"
            >
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </motion.div>
  </Card>
);

export const AutoSkeletonLoaderExamples = () => {
  const [loadingStates, setLoadingStates] = useState({
    profile: true,
    product: true,
    article: true,
  });

  const sampleData = {
    profile: {
      name: "Mostafa Mohamed",
      email: "info@shadowcoding.com",
      role: "Senior Frontend Engineer",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQH58tW4FbgqIg/profile-displayphoto-crop_800_800/B4DZlrjWuiJAAI-/0/1758446055111?e=1761177600&v=beta&t=k0TToVZyjXMiDviXGF80P9Lkzey_vaKhQWeBEWha0N8",
      status: "Online",
    },
    product: {
      name: "Wireless Headphones",
      description: "Premium noise-cancelling headphones with 30hr battery life",
      price: 199.99,
      category: "Electronics",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    },
    article: {
      title: "Shadow Coding",
      author: "Mostafa Mohamed",
      date: "Sept 20, 2023",
      excerpt:
        "Master JavaScript, React, and Next.js to become a senior frontend developer with advanced skills and best practices.",
      featuredImage:
        "https://media.licdn.com/dms/image/v2/D4D16AQH6bOSdADAqZA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1715072501673?e=1761177600&v=beta&t=2JST07HT0bvLjhpp_EaKuoGNsrMb44ADJuOCgf5ncF0",
      tags: [
        "React",
        "Frontend",
        "Design Patterns",
        "javascript",
        "typescript",
        "reactjs",
        "react-native",
        "nextjs",
        "git",
        "github",
      ],
    },
  };

  const toggleLoading = (key: keyof typeof loadingStates) => {
    setLoadingStates((p) => ({ ...p, [key]: !p[key] }));
  };

  const usageSnippet = `<AutoSkeletonLoader
  loading={isLoading}
  inheritStyles
  shimmer={true}
  shimmerColor="#e0e0e0"
  highlightColor="#f5f5f5"
  component={<YourComponent />}
/>`;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-6">
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-8"
        >
          <h1
            className="text-5xl font-extrabold bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          >
            ⚡ AutoSkeletonLoader
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto mt-3">
            Generate skeleton loaders that{" "}
            <span className="text-white font-semibold">
              perfectly match your UI
            </span>
            . Zero config, instant performance boost, and modern UX.
          </p>
          <div className="max-w-2xl mx-auto mt-4 text-gray-400 text-sm">
            <p>
              The <span className="text-white font-medium">inheritStyles</span>{" "}
              feature automatically clones your component's styles for the
              skeleton, while the{" "}
              <span className="text-white font-medium">styles</span> object
              allows fine-grained customization of skeleton elements.
            </p>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left column - Tabs and content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <Tabs defaultValue="profile" className="w-full">
              <TabsList
                className="mx-auto max-w-lg grid grid-cols-3 gap-3 p-2 rounded-xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                }}
              >
                <TabsTrigger
                  value="profile"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-300 border border-transparent data-[state=active]:border-white data-[state=active]:bg-white/6 data-[state=active]:text-white transition"
                >
                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4 text-indigo-300" />
                    Profile
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="product"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-300 border border-transparent data-[state=active]:border-white data-[state=active]:bg-white/6 data-[state=active]:text-white transition"
                >
                  <span className="inline-flex items-center gap-2">
                    🛒 Product
                  </span>
                </TabsTrigger>

                <TabsTrigger
                  value="article"
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-300 border border-transparent data-[state=active]:border-white data-[state=active]:bg-white/6 data-[state=active]:text-white transition"
                >
                  <span className="inline-flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-indigo-300" />
                    Article
                  </span>
                </TabsTrigger>
              </TabsList>

              {/* Profile */}
              <TabsContent value="profile" className="mt-8">
                <Card className="bg-transparent border border-white/6 rounded-2xl p-0">
                  <CardHeader className="flex items-center justify-between p-6">
                    <div>
                      <CardTitle>Profile Card</CardTitle>
                      <CardDescription className="text-gray-400">
                        User profile example
                      </CardDescription>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() => toggleLoading("profile")}
                        style={{ backgroundImage: "var(--gradient-hero)" }}
                        className="px-4 py-2 text-white"
                      >
                        {loadingStates.profile
                          ? "Show Content"
                          : "Show Skeleton"}
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 flex justify-center">
                    <div className="w-full max-w-sm">
                      <AutoSkeletonLoader
                        inheritStyles
                        loading={loadingStates.profile}
                        color="#e2e8f0"
                        highlightColor="hsl(340 70% 65%)"
                        waveWidthValue="200px"
                        waveDirection="left-to-right"
                        component={<ProfileCard user={sampleData.profile} />}
                      />
                      <div className="mt-4 text-sm text-gray-400">
                        <p className="font-medium">💡 inheritStyles Feature:</p>
                        <p>
                          When inheritStyles is enabled, the skeleton loader
                          clones the styles of your elements automatically.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Product */}
              <TabsContent value="product" className="mt-8">
                <Card className="bg-transparent border border-white/6 rounded-2xl p-0">
                  <CardHeader className="flex items-center justify-between p-6">
                    <div>
                      <CardTitle>Product Card</CardTitle>
                      <CardDescription className="text-gray-400">
                        E-commerce sample
                      </CardDescription>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() => toggleLoading("product")}
                        style={{ backgroundImage: "var(--gradient-hero)" }}
                        className="px-4 py-2 text-white"
                      >
                        {loadingStates.product
                          ? "Show Content"
                          : "Show Skeleton"}
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 flex justify-center">
                    <div className="w-full max-w-sm">
                      <AutoSkeletonLoader
                        inheritStyles
                        loading={loadingStates.product}
                        shimmerColor="rgba(255,255,255,0.03)"
                        highlightColor="rgba(255,255,255,0.06)"
                        component={<ProductCard product={sampleData.product} />}
                      />
                      <div className="mt-4 text-sm text-gray-400">
                        <p className="font-medium">💡 inheritStyles Feature:</p>
                        <p>
                          When inheritStyles is enabled, the skeleton loader
                          clones the styles of your elements automatically.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Article */}
              <TabsContent value="article" className="mt-8">
                <Card className="bg-transparent border border-white/6 rounded-2xl p-0">
                  <CardHeader className="flex items-center justify-between p-6">
                    <div>
                      <CardTitle>Article Card</CardTitle>
                      <CardDescription className="text-gray-400">
                        Blog / editorial preview
                      </CardDescription>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() => toggleLoading("article")}
                        style={{ backgroundImage: "var(--gradient-hero)" }}
                        className="px-4 py-2 text-white"
                      >
                        {loadingStates.article
                          ? "Show Content"
                          : "Show Skeleton"}
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 flex justify-center">
                    <div className="w-full max-w-xl">
                      <AutoSkeletonLoader
                        inheritStyles
                        loading={loadingStates.article}
                        shimmerColor="rgba(255,255,255,0.03)"
                        highlightColor="rgba(255,255,255,0.06)"
                        component={<ArticleCard article={sampleData.article} />}
                      />
                      <div className="mt-4 text-sm text-gray-400">
                        <p className="font-medium">💡 inheritStyles Feature:</p>
                        <p>
                          When inheritStyles is enabled, the skeleton loader
                          clones the styles of your elements automatically.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right column - Snippet / Docs */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="rounded-2xl border border-white/6 p-4 h-fit">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">Quick snippet</h3>
                    <p className="text-sm text-gray-400">
                      Copy this snippet to use AutoSkeletonLoader in your
                      component
                    </p>
                  </div>

                  <div className="flex items-center">
                    <CopySnippetButton text={usageSnippet} />
                  </div>
                </div>

                <pre className="mt-4 rounded-md overflow-x-auto p-4 text-sm bg-black/40 font-mono text-green-200">
                  {`import { AutoSkeletonLoader } from "react-loadly";

<AutoSkeletonLoader
  loading={isLoading}
  inheritStyles
  shimmer
  shimmerColor="#e6e6e6"
  highlightColor="#f4f4f4"
  component={<YourComponent />}
/>`}
                </pre>

                <div className="mt-4">
                  <h4 className="font-medium text-gray-200 mb-2">
                    🎨 Customizing Styles
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">
                    You can customize the skeleton styles by targeting specific
                    elements:
                  </p>
                  <pre className="rounded-md overflow-x-auto p-3 text-xs bg-black/30 font-mono text-cyan-300">
                    {`// Example custom styles
styles={{
  p: { width: '100%', height: '16px' },
  img: { width: '100%', height: '200px' },
  h3: { width: '70%', height: '24px' }
}}`}
                  </pre>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/Mostafashadow1/react-loadly"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm border border-white/6"
                    style={{ backgroundImage: "var(--gradient-hero)" }}
                  >
                    View on GitHub
                  </a>
                  <a
                    href="https://www.npmjs.com/package/react-loadly"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm border border-white/6 bg-white/5"
                  >
                    View on npm
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
