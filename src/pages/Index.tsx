import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1E40AF" }}>
      {/* Header */}
      <header className="minecraft-card border-b-4 border-yellow-600 mb-8">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="minecraft-text text-3xl text-yellow-200">
              🏰 MINECRAFT SERVER
            </div>
            <div className="flex space-x-6">
              <a
                href="#home"
                className="minecraft-text text-yellow-200 hover:text-yellow-100 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="minecraft-text text-yellow-200 hover:text-yellow-100 transition-colors"
              >
                О сервере
              </a>
              <a
                href="#news"
                className="minecraft-text text-yellow-200 hover:text-yellow-100 transition-colors"
              >
                Новости
              </a>
              <a
                href="#register"
                className="minecraft-text text-yellow-200 hover:text-yellow-100 transition-colors"
              >
                Регистрация
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="minecraft-text text-6xl mb-6"
              style={{ color: "#4CAF50" }}
            >
              SURVIVAL
              <br />
              <span style={{ color: "#FFD700" }}>СЕРВЕР</span>
            </h1>
            <p className="minecraft-text text-xl mb-8 text-gray-200">
              Присоединяйся к лучшему серверу выживания! Строй, исследуй,
              выживай вместе с друзьями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="minecraft-button minecraft-text text-lg px-8 py-4 text-white">
                <Icon name="Play" className="mr-2" />
                Играть сейчас
              </Button>
              <Button
                variant="outline"
                className="minecraft-text text-lg px-8 py-4 border-2 border-yellow-600 text-yellow-200 hover:bg-yellow-600 hover:text-white"
              >
                <Icon name="Info" className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/img/d329b5b6-d055-4c82-a78e-fdbf1e45a2bc.jpg"
              alt="Minecraft Server"
              className="rounded-lg shadow-2xl border-4 border-yellow-600"
              style={{ imageRendering: "pixelated" }}
            />
            <div className="absolute -top-4 -right-4 minecraft-card p-4">
              <div className="minecraft-text text-green-400 text-2xl">
                🟢 ONLINE
              </div>
              <div className="minecraft-text text-white">128/200 игроков</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="minecraft-text text-4xl text-center mb-12 text-yellow-200">
          О НАШЕМ СЕРВЕРЕ
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="minecraft-card border-4 border-green-600">
            <CardHeader>
              <CardTitle className="minecraft-text text-2xl text-yellow-200 flex items-center">
                <Icon name="Pickaxe" className="mr-3 text-green-400" />
                Выживание
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="minecraft-text text-gray-200">
                Классический режим выживания с полным крафтом, строительством и
                исследованием мира.
              </p>
            </CardContent>
          </Card>

          <Card className="minecraft-card border-4 border-blue-600">
            <CardHeader>
              <CardTitle className="minecraft-text text-2xl text-yellow-200 flex items-center">
                <Icon name="Users" className="mr-3 text-blue-400" />
                Сообщество
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="minecraft-text text-gray-200">
                Дружелюбное сообщество игроков, готовых помочь новичкам и
                поделиться опытом.
              </p>
            </CardContent>
          </Card>

          <Card className="minecraft-card border-4 border-purple-600">
            <CardHeader>
              <CardTitle className="minecraft-text text-2xl text-yellow-200 flex items-center">
                <Icon name="Shield" className="mr-3 text-purple-400" />
                Защита
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="minecraft-text text-gray-200">
                Продвинутая система защиты территорий и анти-читы для честной
                игры.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="container mx-auto px-4 py-16">
        <h2 className="minecraft-text text-4xl text-center mb-12 text-yellow-200">
          ПОСЛЕДНИЕ НОВОСТИ
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="minecraft-card border-4 border-red-600">
            <CardHeader>
              <CardTitle className="minecraft-text text-2xl text-yellow-200">
                🔥 Новые биомы добавлены!
              </CardTitle>
              <CardDescription className="minecraft-text text-gray-300">
                5 июля 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="minecraft-text text-gray-200">
                Исследуйте новые биомы: Вишневая роща, Глубокие пещеры и
                Кристальные долины!
              </p>
            </CardContent>
          </Card>

          <Card className="minecraft-card border-4 border-green-600">
            <CardHeader>
              <CardTitle className="minecraft-text text-2xl text-yellow-200">
                ⚔️ Турнир PvP
              </CardTitle>
              <CardDescription className="minecraft-text text-gray-300">
                1 июля 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="minecraft-text text-gray-200">
                Участвуй в еженедельном турнире PvP! Призы: алмазы, зелья и
                эксклюзивные предметы.
              </p>
            </CardContent>
          </Card>

          <Card className="minecraft-card border-4 border-blue-600">
            <CardHeader>
              <CardTitle className="minecraft-text text-2xl text-yellow-200">
                🏗️ Постройка месяца
              </CardTitle>
              <CardDescription className="minecraft-text text-gray-300">
                25 июня 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="minecraft-text text-gray-200">
                Покажи свою лучшую постройку и получи звание "Архитектор месяца"
                + награды!
              </p>
            </CardContent>
          </Card>

          <Card className="minecraft-card border-4 border-yellow-600">
            <CardHeader>
              <CardTitle className="minecraft-text text-2xl text-yellow-200">
                🎉 Обновление экономики
              </CardTitle>
              <CardDescription className="minecraft-text text-gray-300">
                20 июня 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="minecraft-text text-gray-200">
                Новая система торговли, магазины игроков и улучшенная экономика
                сервера.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="minecraft-text text-4xl text-center mb-12 text-yellow-200">
            ПРИСОЕДИНЯЙСЯ К НАМ
          </h2>
          <Card className="minecraft-card border-4 border-green-600">
            <CardHeader>
              <CardTitle className="minecraft-text text-3xl text-yellow-200 text-center">
                Регистрация на сервере
              </CardTitle>
              <CardDescription className="minecraft-text text-gray-300 text-center">
                IP: mc.survival-server.ru
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="username"
                  className="minecraft-text text-yellow-200"
                >
                  Никнейм в игре
                </Label>
                <Input
                  id="username"
                  placeholder="Steve123"
                  className="minecraft-text border-2 border-yellow-600 bg-gray-800 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="minecraft-text text-yellow-200"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="steve@example.com"
                  className="minecraft-text border-2 border-yellow-600 bg-gray-800 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="minecraft-text text-yellow-200"
                >
                  Расскажи о себе
                </Label>
                <Textarea
                  id="message"
                  placeholder="Привет! Я новичок в Minecraft и хочу..."
                  className="minecraft-text border-2 border-yellow-600 bg-gray-800 text-white"
                />
              </div>
              <Button className="minecraft-button minecraft-text text-lg w-full py-4 text-white">
                <Icon name="UserPlus" className="mr-2" />
                Подать заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="minecraft-card border-t-4 border-yellow-600 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="minecraft-text text-2xl text-yellow-200 mb-4">
                🏰 MINECRAFT SERVER
              </h3>
              <p className="minecraft-text text-gray-300">
                Лучший сервер выживания с дружелюбным сообществом.
              </p>
            </div>
            <div>
              <h4 className="minecraft-text text-xl text-yellow-200 mb-4">
                Информация
              </h4>
              <ul className="minecraft-text text-gray-300 space-y-2">
                <li>• Версия: 1.20.1</li>
                <li>• Режим: Выживание</li>
                <li>• Макс. игроков: 200</li>
                <li>• Аптайм: 99.9%</li>
              </ul>
            </div>
            <div>
              <h4 className="minecraft-text text-xl text-yellow-200 mb-4">
                Контакты
              </h4>
              <div className="minecraft-text text-gray-300 space-y-2">
                <div className="flex items-center">
                  <Icon name="Globe" className="mr-2" />
                  mc.survival-server.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MessageCircle" className="mr-2" />
                  Discord: /discord
                </div>
                <div className="flex items-center">
                  <Icon name="Send" className="mr-2" />
                  Telegram: @mcserver
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-yellow-600 mt-8 pt-8 text-center">
            <p className="minecraft-text text-gray-300">
              © 2025 Minecraft Server. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
